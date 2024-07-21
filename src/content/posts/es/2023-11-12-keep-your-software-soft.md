---
title: Mantén tu software "blando"
description: Pensamientos filosóficos después de leer "Clean Architecture".
pin: false
tags:
- software-development
date: 2023-11-12 21:02 +0100
---
Hace algunas semanas terminé el libro "Arquitectura Limpia". Desde entonces, he estado pensando mucho sobre el software. La mayoría de mis pensamientos son más bien filosóficos. Sin embargo, creo que vale la pena compartirlos como alimento para la reflexión.

Todos sabemos qué es el software, pero quizás no recordemos por qué se inventó. Explicado brevemente, el software se inventó porque la gente necesitaba una forma de cambiar rápidamente el comportamiento de una máquina. A diferencia del hardware, que es la parte "fija" de un sistema, el software estaba destinado a ser "blando" y maleable.

Es de nuestro mejor interés mantener el software fácil de cambiar, tanto para nuestro negocio como para nosotros los desarrolladores. Las empresas ganan el poder de pivotar a medida que cambian las necesidades de la industria. Nosotros, los desarrolladores, básicamente estamos haciendo que nuestro trabajo sea más fácil.

Mantener el software maleable no es tan fácil como suena. Requiere toneladas de disciplina para construir buenos sistemas y mantener la suavidad.

En general, la forma en que mantenemos nuestro software maleable es dejando abiertas tantas opciones como sea posible. Deberíamos retrasar las decisiones que podrían restringir el sistema haciéndolo "duro".

Cada pieza de software está compuesta por:
- Política: las reglas de negocio y los casos de uso principales.
- Detalles: el resto de las piezas que no son fundamentales para el sistema. Algunos ejemplos incluyen el motor de base de datos, el marco web, la interfaz gráfica o los dispositivos de E/S.

Como regla general, imponer una separación entre política y detalles es un buen punto de partida hacia una buena arquitectura.

## Arquitecto de software
El libro habla mucho sobre el papel de un Arquitecto de Software. Para mí, todo desarrollador profesional debería aprender a ser un buen arquitecto.

"El objetivo de un arquitecto de software es minimizar los recursos humanos que requiere para construir y mantener el sistema requerido" - Clean Architecture.

Un sistema bien diseñado debería requerir una cantidad estable de esfuerzo a lo largo de su vida útil.

La arquitectura no se trata solo de detalles de alto nivel. Un buen arquitecto se adentra en los detalles de bajo nivel que sustentan las decisiones de alto nivel. Sin una buena comprensión de los fundamentos, uno no puede definir una "arquitectura de alto nivel".

La dificultad de los cambios en un sistema debería ser proporcional al alcance del cambio. La mayoría de las veces, la dificultad de los cambios está definida por la forma del sistema. Esto es un indicio de una mala arquitectura. La arquitectura adecuada prioriza patrones agnósticos a la forma para que el software pueda cambiar en cualquier dirección. Recuerda, la suavidad es la razón por la que existe el software en primer lugar.

## Deuda técnica y código limpio
El código bien diseñado importa. Escribimos código para que una máquina lo ejecute, pero, más importante aún, ejecutamos código para nosotros y nuestros futuros yo.

Evita acumular "deuda técnica". Todos sabemos que una vez que la deuda técnica comienza a acumularse, difícilmente se limpia después. La presión del negocio nunca cesará.

Recuerda que "llegar primero al mercado" y "agregar más características" son preocupaciones del negocio. Nosotros, como desarrolladores, debemos defender nuestro propio terreno. Reducir la deuda, probar, refactorizar y monitorear adecuadamente son ejemplos de nuestras propias preocupaciones. Hazte esta pregunta: si tú no te levantas para defender esos principios en tu organización, ¿quién lo hará?

El mejor momento para limpiar tu código es después de comprobar que funciona, el segundo mejor momento es ahora.

## Conclusión
Este post no sigue mi estilo de escritura habitual y puede parecer vago. Mi objetivo era compartir algunos pensamientos aleatorios que tuve después de leer "Clean Architecture".

No pretendía hacer un resumen ni nada por el estilo. A estas alturas, ChatGPT probablemente me ganaría en eso.

Siéntete libre de consultar el libro para obtener algunas ideas sobre cómo construir arquitecturas limpias y software "blando".