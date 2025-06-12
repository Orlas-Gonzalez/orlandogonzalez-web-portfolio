pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verificar herramientas') {
            steps {
                sh '''
                    echo "Verificando Docker y Docker Compose..."
                    docker --version || (echo "Docker no está instalado" && exit 1)
                    docker compose version || (echo "Docker Compose no está disponible" && exit 1)
                '''
            }
        }

        stage('Construir y desplegar') {
            steps {
                dir('quellkasten-project') {
                    sh '''
                        echo "Construyendo la imagen docker..."
                        docker compose -f docker-compose.github.yml build web-portfolio

                        echo "Eliminando contenedor existente si existe..."
                        docker rm -f web-porfolio-service || echo "No existía el contenedor web-porfolio-service"

                        echo "Reiniciando el contenedor..."
                        docker compose -f docker-compose.github.yml up -d web-portfolio
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
