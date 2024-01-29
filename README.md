<img src="img/logo_e.png" />

# Instrucciones

Para hacer esta prueba tienes un tiempo aproximado de una hora ( como máximo una hora y media )

En la carpeta `test-angular-v13-eugen` cuentas con una aplicación angular (v13) preparada para comenzar.

```
$ cd test-angular-v13-eugen
$ npm i
$ npm start
```

En otro terminal puedes lanzar una API mockeada que te será de ayuda para realizar la prueba

```
$ npm run mock-api
```

-   Accede a http://localhost:3000 para comprobar con que endpoints cuentas.

Opcionalmente puedes usar el siguiente comando para configurar la versión adecuada de node con nvm

```
$ npm run set-node
```

## Objetivo

El objetivo de esta prueba es ver tus capacidades para organizar y programar un proyecto sencillo con angular.

Mediremos tu capacidad para:

-   Conocimiento de Angular
-   Conocimiento sobre programación reactiva
-   Conocimiento de testing unitarios (solo unitarios)
-   Clean Code

## El problema

Se requiere realizar una lista/tabla de empleados donde se muestren los siguientes datos:

-   DNI
-   Nombre
-   Apellidos
-   Email
-   Edad
-   Departamento (administracion, tienda, contabilidad)

El DNI no podrá ser repetido pero sí el email

Se podrán hacer las acciones de crear, editar y borrar

### Crear empleado

Se podrá crear un cliente con la siguiente información:

-   DNI (Requerido)
-   Nombre (requerido)
-   Primer apellido
-   Segundo apellido
-   Email(Requerido)
-   Fecha de nacimiento
-   Departamento

### Editar empleado

Se podrá editar los siguientes campos

-   Nombre (requerido)
-   Primer apellido
-   Segundo apellido
-   Fecha de nacimiento
-   Departamento

### Borrar empleado

Se podrá eliminar empleados que no pertenezcan al departamento de administración

---

# Preguntas

Se plantean aquí una serie de preguntas que iremos resolviendo a lo largo de la prueba

1. **Organización del código y enrutado**
   ¿Por dónde empezarías el ejercicio si se plantean estos requisitos?
    - que toda la funcionalidad esté bajo la ruta '/employees'
    - que se cargue de "forma perezosa" (Lazy loading)
    - ..
2. **Programación reactiva**
    - ¿Qué librerías conoces?
    - ¿Cómo implementarías reactividad a la hora de obtener los empleados?
    - ..
3. **Estilos**
    - ¿Sueles utilizar algun framework o librería de estilos?
    - ¿Sueles usar compiladores CSS?
    - ..
4. **Angular y typescript**
    - En 'utils/services' se encuentra el fichero 'base.service.ts', ¿sabrías qué hacer con él y su utilidad?
    - ¿Para qué nos pueden resultar utiles estas líneas de código?
    ```
    private employeesSubject = new BehaviorSubject<Employee[] | null>(null);
    public readonly employees$ = this.employeesSubject.asObservable();
    ```
    - ¿Qué utilizarías para visualizar la edad del empleado (desde API nos dan la fecha de nacimiento)?
    - ¿Estás al día de las nuevas versiones de Angular (v17)? ¿Conoces sus cambios más significativos?
5. **Testing**
    - ¿Realizas test normalmente cuando programas en front?
    - ¿Qué tecnologías o frameworks de test conoces/dominas?
    - ..

---

**Mucha Suerte!!**
