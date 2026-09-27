pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ashish12148/flipkart-devops-project.git'
            }
        }

        stage('Docker Build - Frontend') {
            steps {
                sh 'docker build -t flipkart-frontend ./frontend'
            }
        }

        stage('Docker Build - Backend') {
            steps {
                sh 'docker build -t flipkart-backend ./backend'
            }
        }

        stage('Docker Check') {
            steps {
                sh 'docker images | grep flipkart'
            }
        }
    }
}
