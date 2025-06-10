pipeline {
  agent any

  stages {
    stage('Clonar repositorio') {
      steps {
        git branch: 'main', url: 'https://github.com/Orlas-Gonzalez/orlandogonzalez-web-portfolio.git'
      }
    }

    stage('Construir imagen Docker') {
      steps {
        script {
          sh 'docker build -t quellkasten-project-web-portfolio ./web-portfolio'
        }
      }
    }

    stage('Reiniciar contenedor') {
      steps {
        script {
          sh '''
            docker stop web-porfolio-service || true
            docker rm web-porfolio-service || true
            docker compose up -d web-portfolio
          '''
        }
      }
    }
  }

  post {
    failure {
      echo 'La construcción falló.'
    }
  }
}
