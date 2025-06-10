pipeline {
    agent any

    environment {
        PROJECT_DIR = "/home/orlando/quellkasten-project"
        SERVICE_NAME = "web-portfolio"
    }

    stages {
        stage('Verificar herramientas') {
            steps {
                sh '''
                    echo "Verificando Docker y Docker Compose..."
                    docker --version || (echo "Docker no está instalado" && exit 1)
                    docker compose version || (echo "Docker Compose no está disponible" && exit 1)
                '''
            }
        }

        stage('Deploy: web-portfolio') {
            steps {
                dir("${env.PROJECT_DIR}") {
                    sh '''
                        echo "Construyendo la imagen de ${SERVICE_NAME}..."
                        docker compose build ${SERVICE_NAME}

                        echo "Reiniciando el contenedor de ${SERVICE_NAME}..."
                        docker compose up -d ${SERVICE_NAME}
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Despliegue completado exitosamente."
        }
        failure {
            echo "❌ Falló el despliegue. Revisa los logs."
        }
    }
}
