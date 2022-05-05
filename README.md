# Refactoring 🤪

## CASO

Como resultado de una consultoria externa se ha creado un script de mala calidad
y despues de una evaluacion interna realizada por el equipo de backend se tomó
la decisión de refactorizar el proyecto.

### Set de tareas a realizar

- Obtener una lista de explorers que están solo en node.
- Obtener la cantidad de explorers que están en java.
- Obtener la lista de usuarios de github de los explorers que estan en node.
- Se necesitó crear una validación llamada FizzBuzz, si el explorer tiene un score que sea divisible entre 3 (revisa cómo hacer esto), deberá tener un campo `trick` que diga `FIZZ`, cualquier otro caso el valor de este nuevo campo deberá ser el score mismo. Esta validación nos sirve porque necesitamos aplicarla a la lista de todos los explorers y saber cuáles son FIZZ.
- Después necesitamos una validación muy similar pero para cuando el score sea divisible entre 5, entonces el valor del nuevo campo `trick` será BUZZ, cualquier otro caso el valor será el score.
- Pero después volvimos a necesitar otro caso para cuando el valor del score fuera divisible entre 3 y también entre 5, entonces el valor del campo `trick` debe ser FIZZBUZZ, de lo contrario tendrá el valor del score.

### Requerimientos

1. Refactorizar el script legado y rehacerlo, con mucho cuidado ya que se trata de información sensible.
2. Crear un API para usar la funcionalidad anterior:

| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/explorers/:mission` | `localhost:3000/v1/explorers/node` | Deberás obtener la lista de explorers en la misión que enviaste (node o java) |
| `localhost:3000/v1/explorers/amount/:mission` | `localhost:3000/v1/explorers/amount/node` | Deberás obtener la cantidad de explorers según la misión que enviaste (node o java) |
| `localhost:3000/v1/explorers/usernames/:mission` | `localhost:3000/v1/explorers/usernames/node` | Deberás obtener la lista de usernames en la misión que enviaste (node o java) |

3. Nuevo requerimiento: Crea un endpoint para recibir un número y aplicar la validación del fizzbuzz.

### ⚜ Procedimiento:
