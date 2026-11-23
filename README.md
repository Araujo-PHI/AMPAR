# AMRAP
| [Ejercicios](EJERCICIOS.md) | [Progreso](PROGRESO.md) | [Uso y Estructura](USO_Y_ESTRUCTURA.md) |
| :---: | :---: | :---: |



**AMRAP** (*As Many Rounds As Possible* / *As Many Reps As Possible*) significa **"tantas rondas como sea posible"** o **"tantas repeticiones como sea posible"**.



Es una aplicación web enfocada en el uso móvil para entrenamientos AMRAP de **20 minutos**, con cronómetro regresivo, contador de vueltas, checklist por ronda, guía visual de 6 ejercicios y seguimiento mensual de racha.



## Funciones principales

- **Cronómetro de 20:00:** cuenta regresiva con barra de progreso, aviso de finalización (sonido y vibración cuando el navegador lo permite) y opción para intentar mantener la pantalla activa (`Pantalla Activa`).

- **Contador de vueltas y estaciones:** suma o resta vueltas completadas, muestra el avance de la ronda actual (`0/6` a `6/6` estaciones) y permite registrar la sensación de esfuerzo del día.

- **Guía de los 6 ejercicios:** tarjetas con repeticiones, ritmo sugerido, equipamiento, pasos numerados, esquemas visuales SVG, errores comunes y adaptaciones.

- **Progreso mensual y racha:** calendario por mes con visualización de racha diaria, cálculo de racha actual y récord de vueltas, carga/edición manual de días y respaldo en formato JSON.



## Documentación por secciones

Para no cargar demasiado este archivo principal, los detalles de cada parte están organizados en documentos aparte:

- [Guía del circuito y los 6 ejercicios](EJERCICIOS.md)

- [Progreso, racha y respaldo de datos](PROGRESO.md)

- [Uso en el celular y estructura del proyecto](USO_Y_ESTRUCTURA.md)



## Cómo usarlo

1. Descargá o cloná el repositorio en tu computadora o teléfono.

2. Abrí el archivo HTML principal en tu navegador (o entrá al enlace de GitHub Pages si el repositorio está publicado).

3. En el celular, podés agregar el acceso directo a la pantalla de inicio desde el menú del navegador para tenerlo a mano.



## Guardado de datos

Las sesiones registradas se guardan de forma local en el navegador mediante `localStorage`. Desde la sección **Progreso** podés usar **Exportar JSON** para guardar una copia de seguridad e **Importar JSON** para restaurar o mover tus registros.



## Tecnologías utilizadas

- **HTML5**

- **Tailwind CSS** (vía CDN y configuración personalizada)

- **CSS3**

- **JavaScript** (cronómetro, estado de la app, renderizado de vistas, gráficos SVG y `localStorage`)

- **Fuente Arimo** (Google Fonts)
