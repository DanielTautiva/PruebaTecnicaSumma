Clean Architecture Media Calculator
Este proyecto implementa un sistema de información utilizando la arquitectura limpia (Clean Architecture) para calcular la media de una lista de números. El sistema cuenta con tres agentes (A, B y C), cada uno con su propia implementación para calcular la media.

Estructura del Proyecto
src/: Contiene el código fuente del proyecto.
application/: Lógica de aplicación.
agents/: Implementaciones de los agentes.
services/: Servicios de aplicación.
usecases/: Casos de uso de la aplicación.
domain/: Definiciones de modelos del dominio.
infrastructure/: Código de infraestructura.
index.ts: Punto de entrada del proyecto.
Configuración y Ejecución
Instalación:

bash
Copy code
npm install
Ejecución:

bash
Copy code
npx ts-node index.ts
Agentes
Agente A: Media Aritmética

Implementa la lógica para calcular la media aritmética.
Agente B: Media Armónica

Implementa la lógica para calcular la media armónica.
Agente C: Mediana

Implementa la lógica para calcular la mediana.
Servicio de Medios (MediaService)
El servicio MediaService actúa como un intermediario entre los agentes y los casos de uso. Contiene la lógica para obtener la media utilizando el agente proporcionado.

Caso de Uso (GetMediaUseCase)
El caso de uso GetMediaUseCase utiliza el servicio MediaService para calcular la media de una lista de números.

Factory de Agentes (AgentsFactory)
La fábrica de agentes AgentsFactory es responsable de crear instancias de los agentes según el tipo especificado.

Conclusiones y Consideraciones
Este es un esbozo básico de la documentación. Es recomendable agregar secciones adicionales según sea necesario, como requisitos del sistema, dependencias, pruebas, y diagramas de arquitectura, entre otros. Además, es crucial mantener la documentación actualizada a medida que el proyecto evoluciona.