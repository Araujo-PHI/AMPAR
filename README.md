# KORA

![AMRAP Banner](https://github.com/user-attachments/assets/ffb1cdc7-d8aa-4733-b138-17a22b00921e)

**AMRAP** (*As Many Rounds As Possible* / *As Many Reps As Possible*) significa **"tantas rondas como sea posible"** o **"tantas repeticiones como sea posible"**.

Es una aplicación web enfocada en el uso móvil para entrenamientos AMRAP de **20 minutos**, con cronómetro regresivo, contador de vueltas, checklist por ronda, guía visual de 6 ejercicios y seguimiento mensual de racha.

---

## Funciones principales

* **Cronómetro de 20:00:** cuenta regresiva con barra de progreso, aviso de finalización (sonido y vibración cuando el navegador lo permite) y opción para intentar mantener la pantalla activa (`Pantalla Activa`).
* **Contador de vueltas y estaciones:** suma o resta vueltas completadas, muestra el avance de la ronda actual (`0/6` a `6/6` estaciones) y permite registrar la sensación de esfuerzo del día (*Muy suave*, *Suave*, *Normal*, *Fuerte*, *Intenso*).
* **Guía de los 6 ejercicios:** tarjetas con repeticiones, ritmo sugerido, equipamiento, pasos numerados, esquemas visuales SVG articulados, errores comunes y adaptaciones.
* **Progreso mensual y racha:** calendario por mes con visualización de racha diaria, cálculo de racha actual y récord de vueltas, carga/edición manual de días y respaldo en formato JSON.

---

## Circuito de 6 Ejercicios

Una vuelta completa equivale a completar las 6 estaciones en orden, priorizando siempre la técnica limpia antes que la velocidad:

| # | Ejercicio | Repeticiones | Equipamiento |
| :-: | :--- | :--- | :--- |
| **01** | **Sentadilla con Peso Corporal** | 10 reps | Peso corporal (opcional: 1 mancuerna de 1 kg) |
| **02** | **Flexiones de Brazos** | 6-8 reps | Peso corporal (opción apoyando rodillas) |
| **03** | **Giros Rusos con Pelota** | 12 giros (6 por lado) | 1 pelota de fútbol |
| **04** | **Press de Hombros con Mancuernas** | 10 reps | 2 mancuernas de 1 kg |
| **05** | **Perro Pájaro** | 5 por lado | Peso corporal |
| **06** | **Conducción en Zigzag** | 4 reps | 2 conos (a 1,5 m) + 1 pelota de fútbol |

---

## Seguimiento y Progreso

* **Almacenamiento local:** todas las sesiones se guardan automáticamente en el navegador (`localStorage`), sin necesidad de crear cuentas ni tener conexión a internet después de cargar la página.
* **Calendario mensual:** muestra los días entrenados conectados en bloques continuos según tu racha, junto con la cantidad de vueltas logradas en cada fecha.
* **Carga y edición manual:** tocando cualquier día pasado o actual en el calendario (o usando el botón de registro manual) podés anotar entrenamientos olvidados, corregir vueltas o agregar notas.
* **Respaldo en JSON:** desde la pestaña **Progreso** podés exportar todo tu historial a un archivo `.json` e importarlo cuando cambies de dispositivo o navegador.

---

## Uso en el celular y estructura del proyecto

* **Acceso rápido en móvil:** abrí `https://araujo-phi.github.io/AMRAP/` desde el navegador de tu teléfono y elegí **"Agregar a pantalla de inicio"** para usarla a pantalla completa como una app nativa.
* **Estructura de archivos:**
  * `index.html`: estructura principal de las tres vistas (*Entrenar*, *Ejercicios*, *Progreso*) y modales.
  * `styles.css`: estilos personalizados de alto contraste (bordes marcados, feedback táctil y margen inferior seguro).
  * `tailwind.config.js`: configuración de paleta monocromática (`pureblack`, `purewhite`) y tipografía.
  * `app.js`: lógica del temporizador, Screen Wake Lock API, motor SVG articulado de los ejercicios y gestión de progreso.
