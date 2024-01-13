Clean Architecture Media Calculator
Este proyecto implementa un sistema de información utilizando la arquitectura limpia (Clean Architecture) para calcular la media de una lista de números. El sistema cuenta con tres agentes (A, B y C), cada uno con su propia implementación para calcular la media.


```bash
$ # Estructura del Proyecto
$ # src/: Contiene el código fuente del proyecto.
$ # application/: Lógica de aplicación.
$ # agents/: Implementaciones de los agentes.
$ # services/: Servicios de aplicación.
$ # usecases/: Casos de uso de la aplicación.
$ # domain/: Definiciones de modelos del dominio.
$ # infrastructure/: Código de infraestructura.
$ # index.ts: Punto de entrada del proyecto.
```

Configuración y Ejecución
Instalación:

```bash
$ npm install
```

Ejecucion
```bash
$ npm ts-node index.ts
```