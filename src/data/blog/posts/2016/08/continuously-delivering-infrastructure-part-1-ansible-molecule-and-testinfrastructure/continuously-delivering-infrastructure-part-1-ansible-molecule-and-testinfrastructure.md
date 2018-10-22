---
year: "2016"
month: "08"
name: "continuously-delivering-infrastructure-part-1-ansible-molecule-and-testinfrastructure"
title: "Continuously delivering infrastructure – Part 1: Ansible, Molecule and Testinfrastructure"
titlePicture: "TestAllTheThings.jpg"
summary: "As part of a centralised system engineer tools and operations team, we often show teams how to set up their continuous integration workflow. Most of the time, this is build in a Java environment with a pipeline made in Jenkins CI and of course some testing frameworks."
author: "Sebastian Kornehl"
authorEmail: "Sebastian.Kornehl@asideas.de"
url: "/blog/2016/08/continuously-delivering-infrastructure-part-1-ansible-molecule-and-testinfrastructure/"
markdownUrl: "/blog/2016/08/continuously-delivering-infrastructure-part-1-ansible-molecule-and-testinfrastructure.md"
authorPictureUrl: "//www.gravatar.com/avatar/a74ad1edf5a1d8049b74749433954ac9"
permalink: "http://axelspringerideas.de/blog/2016/08/continuously-delivering-infrastructure-part-1-ansible-molecule-and-testinfrastructure/"
id: "0509572a83b5d2c879bf8358169990ac"
date: "2016-08-01T10:00:00.000Z"
---
Continuously delivering infrastructure – Part 1: Ansible, Molecule and Testinfrastructure
================================================================================

**Motivation**

![TestAllTheThings](TestAllTheThings.jpg)As part of a centralised system engineer tools and operations team, we often show teams how to set up their continuous integration workflow. Most of the time, this is build in a Java environment with a pipeline made in Jenkins CI and of course some testing frameworks.

Our infrastructure is provisioned with Ansible, so we are able to write **I**nfrastructure **a**s **C**ode (IaC). We create VirtualBox files for almost all of our playbooks to test changes with it manually. This construct however failed regularly once it hit the staging environments. So the following thought came up: We already write code – why don’t we just continuously deploy it also?

A few years ago, we switched from Chef to Ansible and remembered there was something called Test Kitchen. We set up a small environment, using the Kitchen-Ansible connector and wrote a few tests using Serverspec. This was much better than manual testing, but felt clumsy and unnatural for Ansible. Plus, I really don’t like Ruby.

Then, a few months ago, there was a post on Reddit, introducing Molecule for Ansible. We looked at it, set up a new project with it and it felt very comfortable.

Just to clarify: The process is still in development, but we use all this in our first projects.

**Ansible**

![A](ansible_circleA_red.png)s already mentioned, we’re using Ansible for configuration management. In the following I will show you how we split up our roles instead of giving you another “[What is Ansible](https://docs.ansible.com/ansible/index.html)” article.

As a centralised team we have the challenge of many projects using the same roles. For this we’re![Screen Shot 2016-08-12 at 09.49.44](Screen-Shot-2016-08-12-at-09.49.44-245x300.png) using a distribution way similar to Ansible-Galaxy. We introduced a private Git repo and added our roles there.

With this, all teams are able to contribute and use common roles. To ensure that one Play is always running once it is ready, we created a Git tag for all tested versions and used them in our _requirements.yml,_ which looks like this:

\- src: https://github.com/as-ideas/ansible-galaxy-epel.git
  scm: git
  version: v1.0

\- src: ssh://git@our-git-server.local/op/ansible-galaxy-user-ssh.git
  scm: git
  version: v2.2

All our roles are prefixed with “ansible-galaxy-” so we can easily add them to the _.gitignore _file and force the user to pull them – if we want to. To download the roles we use the ansible-galaxy CLI.

> ansible-galaxy install -r requirements.yml -p ./roles –force

This is not really the best solution. However, a [proposal](https://github.com/ansible/proposals/issues/23) to improve the process is already out there.

We also discussed sharing these roles to the public Ansible-Galaxy, but we are actually not quite sure about the benefit to others. We are bound to RHEL7 and would have a bit more configuration overhead (like secrets) so we decided to skip that for now.

**Molecule![12a1bb40-8e12-11e5-9adf-9a7aea1ddda9](12a1bb40-8e12-11e5-9adf-9a7aea1ddda9.png)**

The concept of Molecule is very similar to Test Kitchen. It is designed to help you develop and test your playbooks. If you are already using Kitchen, you might be happy to hear that Molecule supports Testinfa and Serverspec. So no need to throw away your current tests. You can test your Plays against Vagrant, Docker, OpenStack, and libvirt.

Docker is fast, lightweight and for most modules the ideal choice. Docker installation or deployment might be the big exceptions – I don’t see that Docker in Docker is very reliable. For whole plays we use Vagrant with a Vbox image of the operation system that is also used in our datacenter. That is not as fast as Docker but important for compatibility reasons.

**Testing Roles**

For role testing, we will look at [ansible-galaxy-epel](https://github.com/as-ideas/ansible-galaxy-epel). It does nothing but enable [EPEL](https://fedoraproject.org/wiki/EPEL) for the system. The central part is the _[molecule.yml](https://github.com/as-ideas/ansible-galaxy-epel/blob/master/molecule.yml)._ You may see aminimal setup in the listing below or [documentation](http://molecule.readthedocs.io/en/master/usage.html) for more options.

\-\-\-
ansible:
  playbook: tests/epel.yml
  inventory_file: tests/hosts

docker:
  containers:
    \- name: epel01
      image: centos
      image_version: 7

The file just points to playbook and inventory and describes the Docker container. Once you enter _molecule converge_ you should see output like this:

--\> Creating instances ...
--\> Creating Ansible compatible image of centos:7 ...
Creating container epel01 with base image centos:7 ...
Container created.
--\> Starting Ansible Run ...

PLAY \[all\] *********************************************************************

TASK \[setup\] *******************************************************************
ok: \[epel01\]

TASK \[../ansible-galaxy-epel : Install EPEL\] ***********************************
changed: \[epel01\]

PLAY RECAP *********************************************************************
epel01                    : ok=2    changed=1    unreachable=0    failed=0

So let’s have a look at the test. As already mentioned, I don’t like Ruby so we will use Testinfra here which is a plugin to pytest. As a bonus, we have the possibility to use the Ansible Python interface (also Puppet, Facter and Salt) which will make things much easier to test. For our example we have a test file like this:

from pytest import fixture

@fixture()
def Repository_exists(Command):
    """
    Tests if YUM Repo with specific Name exists and is enabled:
    \- \*\*repo\*\* - repo name to look for
    \*\*returns\*\* - True is String is found
    """
    def f(repo):
        return (repo in Command.check_output("yum repolist"))
    return f


def test\_epel\_repo\_is\_installed(Repository_exists):
    assert Repository_exists("Extra Packages for Enterprise Linux")

The method_ test\_epel\_repo\_is\_installed _is the only test here. As you can see it just calls a fixture _Repository_exists_. The fixture itself only compares the requested string to the output of _yum repolist._

Wait, what is a fixture? The [pytest documentation](http://doc.pytest.org/en/latest/fixture.html) says:

> The purpose of test fixtures is to provide a fixed baseline upon which tests can reliably and repeatedly execute. pytest fixtures offer dramatic improvements over the classic xUnit style of setup/teardown functions

We created a project with common fixtures for our tests, but this is not part of this blogpost.

Once you enter _molecule converge_ you should see output like this:

--\> Executing testinfra tests found in tests/.
============================= test session starts ==============================
platform darwin -- Python 2.7.12, pytest-2.9.2, py-1.4.31, pluggy-0.3.1
rootdir: /Users/skornehl/workspace-public/ansible-galaxy-epel/tests, inifile:
plugins: xdist-1.14, testinfra-1.4.1
collected 1 itemss

tests/test_epel.py .

================= 1 passed, 1 pytest-warnings in 3.58 seconds ==================
No serverspec tests found in spec/.

**Testing a Play![logo](logo.png)**

As a Play, we will have a look at [ansible-blogpost](https://github.com/as-ideas/ansible-blogpost). This Play has only one role which is named _install-system. _The _molecule.yml_ is now using Vagrant with VirtualBox as provider.

ansible:
  playbook: site.yml
  inventory_file: stage
  host\_key\_checking: False

molecule:
  testinfra_dir: ./roles/*/tests

vagrant:
  raw\_config\_args:
    \- "ssh.insert_key = false"

  platforms:
    \- name: centos7
      box: centos/7

  providers:
    \- name: virtualbox
      type: virtualbox

  instances:
    \- name: webserver1
      interfaces:
        \- network\_name: private\_network
          type: dhcp
          auto_config: true
        \- network\_name: private\_network
          type: static
          ip: 172.32.128.2
          auto_config: true
      options:
        append\_platform\_to_hostname: no"

As you can see we advise Molecule to use all tests under _./roles/*/tests _and also give the VM a fixed IP for the Ansible connection. This is described in the inventory:

\# Group
\[all\]
webserver1 ansible\_ssh\_host=172.32.128.2

\[all:vars\]
ansible_user=vagrant
ansible\_ssh\_private\_key\_file=~/.vagrant.d/insecure\_private\_key

As described before, there already is a _requirements.yml_ which includes ansible-galaxy-epel. Executing _ansible-galaxy install -r requirements.yml -p ./roles –force_ will output:

\- extracting ansible-galaxy-epel to ./roles/ansible-galaxy-epel
\- ansible-galaxy-epel was installed successfully

This will add the ansible-galaxy-epel folder, including the tests, onto this project. The _install-system_ role does the following:

\- name: Install NTP
  yum:
    name: ntp
    state: latest

\- name: Start and enable NTP service
  service:
    name: ntpd
    state: started
    enabled: yes

\- name: Install HTTPD
  yum:
    name: "httpd-{{ httpd_version }}"
    state: installed

\- name: Start and enable HTTPD service
  service:
    name: httpd
    state: started
    enabled: yes

To keep this simple there is nothing but NTP and HTTPD installation, starting and enabling them.

Running _molecule converge_ here will output something like you saw in **Testing Roles**, but installing via Vbox instead of Docker and running the tasks in the VM. When starting _molecule verify_ we will see this:

-\> Executing testinfra tests found in ./roles/*/tests/.
============================= test session starts ==============================
platform darwin -- Python 2.7.12, pytest-2.9.2, py-1.4.31, pluggy-0.3.1
rootdir: /Users/skornehl/workspace-public/ansible-molecule-test/roles, inifile:
plugins: xdist-1.14, testinfra-1.4.1
collected 6 itemss

roles/ansible-galaxy-epel/tests/test_epel.py .
roles/install-system/tests/test_httpd.py ..
roles/install-system/tests/test_ntp.py ...

================= 6 passed, 1 pytest-warnings in 4.88 seconds ==================
No serverspec tests found in spec/.

We find test_epel.py from the ansible-galaxy-epel role and two more test files. The first on to look at is [test_ntp.py](https://github.com/as-ideas/ansible-blogpost/blob/master/roles/install-system/tests/test_ntp.py):

def test\_ntp\_is_installed(Package):
    ntp = Package("ntp")
    assert ntp.is_installed

def test\_ntp\_running\_and\_enabled(Service):
    ntp = Service("ntpd")
    assert ntp.is_running
    assert ntp.is_enabled

def test\_ntp\_is_synchronous(Command):
    assert Command.run_test("ntpstat")

This is using a few more Fixtures which are coming from Testinfra. **Package** is used to determine if ntp is installed. With **Service,** Testinfra can check ifthe serviceis running and autostarting in this environment. **Command** runs a command in the VM. _run_test_ assumes that the command afterwards exits with 0 as return code.

The other testfile is [test_httpd.py](https://github.com/as-ideas/ansible-blogpost/blob/master/roles/install-system/tests/test_httpd.py):

from pytest import fixture

@fixture()
def Ansible_var(Ansible):
    """
    Returns value for Ansible Variable:
    \- \*\*variable\*\* - The variable
    \*\*returns\*\* - Variable String
    """
    def f(variable):
        return Ansible("debug", "msg={{ %s }}" % variable)\["msg"\]
    return f

def test\_httpd\_is\_installed(Package, Ansible\_var):
    httpd = Package("httpd")
    assert httpd.is_installed
    assert httpd.version == Ansible\_var("httpd\_version")

def test\_httpd\_running\_and\_enabled(Service):
    httpd = Service("httpd")
    assert httpd.is_running
    assert httpd.is_enabled

Here **Package** and **Service** are also used as before. Testinfra’s **Ansible** fixture is used to implement an own fixture **Ansible_var** to easily determine variable values directly from Ansible. This is used to check if the exact version is installed as we wanted to in the Plays [group_vars](https://github.com/as-ideas/ansible-blogpost/blob/master/group_vars/all):

\# HTTPD Version
httpd_version: 2.4.6

**Idempotency**

As one other important thing Molecule has a idempotency check out of the box. Take it serious – especially when you try to provision your machines with every checkin, you need to know that there are only changes when they are wanted. When you do a complete _molecule test_, you will see this in the output between converge and verify phase:

--\> Idempotence test in progress (can take a few minutes)...
--\> Starting Ansible Run ...
Idempotence test passed.

It simply runs the play a second time and checks if there are still tasks with the status _changed_.

**Conclusion**

This is a very basic description of how to test your Ansible playbooks, but it should give you a quick start on how you can do it. For us, we are writing more and more tests to find out early when things break. Especially with Docker, we are able to test most of it locally in development and things break (mostly) here instead on the dev’s stage or production machines.

**Spoiler**

If you ask yourself where the “continuously” part is. A colleague of mine will post how we use all this in our CI to **continuously deliver infrastructure** in the next weeks.

**Tools and Version**

Ansible _2.1.1.0_  
Molecule _1.8.4_  
Testinfra _1.4.1 _  
Pytest _2.9.2 _  
Docker _1.12.0-a_ (Docker for MAC)  
Vagrant _1.8.4_  
Virtualbox _5.0.22_