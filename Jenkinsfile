pipeline {
 agent any
 tools {
  maven 'Maven'
  nodejs 'nodejs'
 }
 stages {
  stage('Clone') {
   steps { echo 'Code cloned from GitHub' }
  }
  stage('Build Java') {
   steps {
    dir('backend-java') {
     sh 'mvn clean package'
     sh 'docker build -t farm-java-app .'
    }
   }
  }
  stage('Build Node') {
   steps {
    dir('backend-node') {
     sh 'docker build -t farm-node-app .'
    }
   }
  }
  stage('Deploy') {
   steps {
    sh '''
    docker network create farm-net || true
    docker stop farm-java farm-node || true
    docker rm farm-java farm-node || true
    docker run -d --net farm-net -p 3000:3000 --name farm-node farm-node-app
    docker run -d --net farm-net -p 8080:8080 --name farm-java farm-java-app
    '''
   }
  }
 }
}
