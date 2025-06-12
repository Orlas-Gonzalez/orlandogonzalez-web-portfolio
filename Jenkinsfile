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

        stage('Configurar red externa') {
            steps {
                sh '''
                    echo "Creando red docker externa quellkasten_web si no existe..."
                    docker network inspect quellkasten_web > /dev/null 2>&1 || docker network create quellkasten_web
                '''
            }
        }

        stage('Construir y desplegar') {
            steps {
                dir('quellkasten-project') {
                    sh '''
                        echo "Construyendo la imagen docker del web-portfolio..."
                        docker compose -f docker-compose-web-portfolio.yml build web-portfolio

                        echo "Eliminando contenedor existente si existe..."
                        docker rm -f web-portfolio-service || echo "No existía el contenedor web-portfolio-service"

                        echo "Levantando contenedor web-portfolio en la red quellkasten_web..."
                        docker compose -f docker-compose-web-portfolio.yml up -d web-portfolio
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
