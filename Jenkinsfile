pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio en el workspace actual
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
                dir('quellkasten-project') {   // Aquí la carpeta de tu proyecto dentro del repo
                    sh '''
                        echo "Construyendo la imagen docker..."
                        docker compose build web-portfolio

                        echo "Reiniciando el contenedor..."
                        docker compose up -d web-portfolio
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
