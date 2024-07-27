---
title: "Próximos Pasos: Convertirse en un Ingeniero Backend"
description: Compartiendo mi viaje de transición de desarrollo full-stack a backend.
pin: false
tags: [mi-historia]
date: 2023-03-16 12:21 +0100
---

En la [publicación anterior](https://monkeyandres.com/post/my-story-part-2/) sobre mi historia, hablé sobre tomar un período sabático para escapar de la rutina y explorar otros pasatiempos. Hoy quiero compartir cuáles serán mis próximos pasos.

## Resumen de mi carrera en desarrollo

Primero, recapitulemos. Comencé en el mundo del desarrollo de software profesional cuando tenía 17 años (2018). Desde entonces, he estado trabajando con diferentes empresas en numerosos proyectos. La mayoría de ellos consistían en desarrollar clientes para web o móvil para interactuar con backends existentes. Aunque disfrutaba los desafíos que enfrentaba un desarrollador frontend, eventualmente me cansé del ecosistema frontend.

No me malinterpreten, el desarrollo frontend es un tema muy complejo, especialmente con el surgimiento de nuevos frameworks de JS, bibliotecas, APIs web, SSR, SSG, etc. Aunque estas tecnologías geniales son excelentes, siento que usualmente complicamos demasiado las cosas cuando la mayoría de los casos de uso podrían resolverse con JS vanilla o micro-frameworks (ver [htmlx](https://github.com/bigskysoftware/htmx))

## ¿Dónde me veo en el futuro?

Quiero probar cosas nuevas y el desarrollo backend llamó mi atención porque está relacionado con el trabajo que he estado haciendo todos estos años.

A pesar de estar relacionado, la transición entre uno y otro es enorme. Un ingeniero backend debería saber sobre diseño de API, protocolos, capas OSI, balanceo de carga, bases de datos, seguridad, estrategias de autenticación/autorización, despliegue, y la lista sigue y sigue. Debido a esta gran cantidad de nuevos conocimientos, no me sentía lo suficientemente confiado como para postularme a una posición completa de backend.

Afortunadamente, vivimos en la era de la información y aprovechando el período sabático logré crear un plan para llegar a donde quería.

## ¿Cómo planeo llegar allí?

Lo primero que hice fue identificar las tecnologías que un desarrollador backend debería conocer. Hay buenos recursos en internet, como mapas de ruta de backend, pero lo que encuentro más útil es mirar los requisitos de ofertas de trabajo reales.

Después de recopilar una gran lista de tecnologías, evalué qué tan seguro me sentía sobre cada elemento de la lista. Ese simple ejercicio me ayudó a reducir la lista anterior y notar dónde estaban mis puntos débiles.

Este proceso ha demostrado ser muy eficiente en el pasado, ya que tiene en cuenta lo que ya sé y me ayuda a enfocarme en lo que no sé. Además, encuentro más fácil (y rápido) aprender temas individuales en lugar de atacar la amplia pregunta de "cómo convertirse en un ingeniero backend".

El resultado final fue una lista con tecnologías que no conocía mucho y preguntas sobre tecnología que conocía. Por último, la prioricé y voilá, obtuve mi hoja de ruta para convertirme en un desarrollador backend.

## ¿Qué recursos utilicé para estudiar el desarrollo backend?

Los recursos que estoy a punto de compartir están destinados a llenar los vacíos en mi propio conocimiento. No estoy tratando de proporcionar la hoja de ruta definitiva para el desarrollo backend. Mi intención es compartir recursos que encontré perspicaces para que otras personas puedan beneficiarse de ellos.

Antes de hacer clic en cualquier enlace, te animo a encontrar tus propios "puntos débiles" en lugar de consumir sin pensar todos los recursos a continuación.

### Fundamentos de backend

El mejor recurso individual que puedo recomendar es el [canal de YouTube de Hussein Nasser](https://www.youtube.com/@hnasr). Tiene muchos videos sobre desarrollo backend, personalmente me gustan sus explicaciones y cómo profundiza en los temas. Además de ver muchos videos de su canal, también tomé su curso sobre [fundamentos de backend](https://backend.husseinnasser.com).

### Bases de datos

- [Arquitecturas de bases de datos y casos de uso](https://dev.to/harperdb/database-architectures-use-cases-explained-5711)
- [SQL vs NoSQL](https://nodeflair.com/blog/sql-vs-nosql-databases-system-design-interview)
- [Cómo trabajar de manera óptima con bases de datos relacionales](https://www.freecodecamp.org/news/how-to-work-optimally-with-relational-databases-627073f82d56/)
- [Mejores prácticas trabajando con tablas de mil millones de filas en bases de datos](https://www.youtube.com/watch?v=wj7KEMEkMUE)
- [Cómo escalar bases de datos relacionales](https://www.youtube.com/watch?v=iHNovZUZM3A) (particionamiento, replicación, fragmentación)
- [Transacciones ACID (Explicadas con ejemplos)](https://www.youtube.com/watch?v=pomxJOFVcQs)
- [Particionamiento de bases de datos horizontal vs vertical](https://www.youtube.com/watch?v=QA25cMWp9Tk)
- [Indexación de bases de datos explicada (PostgreSQL)](https://www.youtube.com/watch?v=-qNSXK7s7_w)
- [Guía para el rendimiento de bases de datos (use-the-index-luke.com)](https://use-the-index-luke.com/)

### Diseño de API

- [Diseñando APIs de calidad (Cloud Next '18)](https://youtu.be/P0a7PwRNLVU) este video resume la mayoría de las siguientes publicaciones de blog
- [APIs 101: Todo lo que necesitas saber sobre el diseño de API](https://cloud.google.com/blog/products/api-management/google-cloud-api-design-tips)
- [Diseñando y gestionando APIs: Mejores prácticas y errores comunes](https://cloud.google.com/blog/products/api-management/api-design-best-practices-common-pitfalls)
- [gRPC vs REST: Entendiendo gRPC, OpenAPI y REST y cuándo usarlos en el diseño de API](https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them)
- [Por qué tus APIs deberían estar orientadas a entidades](https://cloud.google.com/blog/products/api-management/why-your-web-apis-should-be-entity-oriented)
- [Mejores prácticas de versionado de API](https://cloud.google.com/blog/products/api-management/common-misconceptions-about-api-versioning)

### Seguridad

- [OWASP Top Ten](https://owasp.org/www-project-top-ten/) lista de las vulnerabilidades más comunes en la web
- [¿Qué es la autenticación?](https://auth0.com/intro-to-iam/what-is-authentication)
- [¿Qué es OAuth 2.0?](https://auth0.com/intro-to-iam/what-is-oauth-2)
- [¿Qué es OpenID Connect (OIDC)?](https://auth0.com/intro-to-iam/what-is-openid-connect-oidc)
- [Cinco autenticaciones de contraseña de la menos a la más segura](https://www.youtube.com/watch?v=_t8EPImx9LI)

## Cierre

Soy consciente de que todavía tengo un largo camino para convertirme en un verdadero ingeniero backend, pero gracias a este período ahora me siento listo para asumir posiciones de backend.

En las próximas semanas planeo ensuciarme las manos desarrollando un "backend de juguete" en Go y poner en práctica todas las cosas que he aprendido.

Espero que esto ayude a algunos otros desarrolladores frontend que intentan entrar en el mundo del desarrollo backend.

Gracias por leer.