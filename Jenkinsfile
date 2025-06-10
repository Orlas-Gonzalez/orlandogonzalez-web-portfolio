pipeline {
  agent any

  stages {
    stage('Build and Deploy Web Porfolio') {
      steps {
        script {
          dir("${env.WORKSPACE}") {
            sh 'docker compose build web-porfolio'
            sh 'docker compose up -d web-porfolio'
          }
        }
      }
    }
  }

  post {
    failure {
      echo '❌ La build falló.'
    }
    success {
      echo '✅ Web porfolio actualizado correctamente.'
    }
  }
}
