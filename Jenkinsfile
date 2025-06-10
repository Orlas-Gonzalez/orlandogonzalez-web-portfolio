pipeline {
  agent any

  environment {
    // Ajusta la ruta si docker compose no está en PATH estándar de Jenkins
    PATH = "${env.PATH}:/usr/local/bin"
  }

  stages {
    stage('Check Docker Environment') {
      steps {
        script {
          echo "Verificando Docker y Docker Compose..."
        }
        sh 'docker --version'
        sh 'docker compose version || echo "docker compose no disponible"'
        sh 'docker-compose --version || echo "docker-compose no disponible"'
        sh 'which docker'
        sh 'which docker-compose'
        sh 'which docker-compose || which docker-compose || echo "No se encontró docker-compose"'
      }
    }

    stage('Checkout Source Code') {
      steps {
        checkout scm
      }
    }

    stage('Build and Deploy web-porfolio') {
      steps {
        script {
          try {
            sh '''
              echo "Construyendo la imagen de web-porfolio"
              docker compose build web-porfolio
              echo "Levantando el contenedor de web-porfolio"
              docker compose up -d web-porfolio
            '''
          } catch (err) {
            error "Error durante build/deploy: ${err}"
          }
        }
      }
    }
  }
}
