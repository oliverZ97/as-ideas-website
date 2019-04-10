#!groovy​

node('phantomjs') {

  try {
    stage('Checkout') {
      cleanWs()
      checkout scm
    }

    stage('Install') {
      sh "npm install"
    }

    stage('Build') {
      sh "npm run build"
    }

    stage('Optimize') {
      sh "npm run optimize"
    }

    stage('Deploy') {
      // Needs Plugin: https://plugins.jenkins.io/ssh-agent
      sshagent(['57d10763-286f-4a9e-bc23-7fd86908196b']) {
        // We need to add the host to the list of known hosts, otherwise we will get "Host verification failed"
        sh ": ssh-keygen -R ec2-18-184-76-12.eu-central-1.compute.amazonaws.com"
        sh ": \$(ssh-keyscan ec2-18-184-76-12.eu-central-1.compute.amazonaws.com >> ~/.ssh/known_hosts)"
        sh "scp -r ./public/* ec2-user@ec2-18-184-76-12.eu-central-1.compute.amazonaws.com:/usr/share/nginx/html/"
      }
    }

    currentBuild.result = 'SUCCESS'
  } catch (e) {
    currentBuild.result = 'FAILED'
    throw e
  }
}

