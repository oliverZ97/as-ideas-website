#!groovy​

node('oil2') {

  try {
    stage('Checkout') {
      cleanWs()
      checkout scm
    }

    stage('Install') {
      sh "npm install"
    }

    stage('Linting') {
      sh "npm run build"
    }

    stage('Deploy') {
      // Needs Plugin: https://plugins.jenkins.io/ssh-agent
//      sshagent(['57d10763-286f-4a9e-bc23-7fd86908196b']) {
      sh "scp -r ./public/* ec2-user@ec2-18-184-76-12.eu-central-1.compute.amazonaws.com:/usr/share/nginx/html/"
//      }
    }

    currentBuild.result = 'SUCCESS'
  } catch (e) {
    currentBuild.result = 'FAILED'
    throw e
  }
}

