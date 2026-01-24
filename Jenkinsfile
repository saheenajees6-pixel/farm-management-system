pipeline {
    agent any

    tools {
        maven 'Maven'
        nodejs 'nodejs'
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Code cloned from GitHub'
            }
        }

        stage('Build Java') {
            steps {
                dir('backend-java') {
                    bat 'mvn clean package'
                    bat 'docker build -t farm-java-app .'
                }
            }
        }

        stage('Build Node Backend') {
            steps {
                nodejs('nodejs') {
                    dir('backend-node') {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment stage (can add docker run later)'
            }
        }
    }
}