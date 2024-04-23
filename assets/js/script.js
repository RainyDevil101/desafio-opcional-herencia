// Requerimientos
// 1. Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases.
// (2 Puntos)
// 2. Crear los métodos get y set para la clase de mascota.
// (2 Puntos)
// 3. Crear un método get para la clase Animal de la propiedad tipo para retornar el mensaje
// “El tipo de animal es un: ${this.tipo}”.
// (2 Puntos)
// 4. Crear el método “datosPropietario” en la clase correspondiente y que pueda ser
// accedido desde las clases inferiores.
// (2 Puntos)
// 5. Captar los elementos del formulario con JavaScript e identificar el tipo de animal para
// realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el
// usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el
// nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse
// “Perro”.
// (1 Puntos)
// 6. Mostrar a modo de lista los mensajes resultantes para el método “datosPropietario”
// cuando el usuario haga un clic sobre el botón Agregar, accediendo a los métodos get
// de las clases Animal y Mascota, concatenando todo en un solo mensaje, como se
// muestra en la imagen a continuación:
// (1 Puntos)

// Clases

class Propetario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  datosPropetario() {
    return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y su número telefónico de contacto: ${this.telefono}`;
  }
}

class Animal extends Propetario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this.tipo = tipo;
  }

  getTipo() {
    return `El tipo de animal es un: ${this.tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this.nombreMascota = nombreMascota;
    this.enfermedad = enfermedad;
  }

  getNombre() {
    return `el nombre de la mascota es: ${this.nombreMascota}`;
  }

  getEnfermedad() {
    return `la enfermedad es: ${this.enfermedad}`;
  }

  setNombre(nuevoNombre) {
    this.nombreMascota = nuevoNombre;
  }
}

// Funciones

const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const propietario = document.getElementById('propietario').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const nombreMascota = document.getElementById('nombreMascota').value;
  const tipo = document.getElementById('tipo').value;
  const enfermedad = document.getElementById('enfermedad').value;

  if (
    propietario === '' ||
    telefono === '' ||
    direccion === '' ||
    nombreMascota === '' ||
    tipo === '' ||
    enfermedad === ''
  ) {
    alert('Todos los campos son obligatorios');
    return;
  }

  let mascota;

  if (tipo === 'perro') {
    mascota = new Mascota(
      propietario,
      direccion,
      telefono,
      'Perro',
      nombreMascota,
      enfermedad
    );
  } else if (tipo === 'gato') {
    mascota = new Mascota(
      propietario,
      direccion,
      telefono,
      'Gato',
      nombreMascota,
      enfermedad
    );
  } else if (tipo === 'conejo') {
    mascota = new Mascota(
      propietario,
      direccion,
      telefono,
      'Conejo',
      nombreMascota,
      enfermedad
    );
  }

  resultado.innerHTML = `
    <ul>
      <li>${mascota.datosPropetario()}</li>
      <li>${mascota.getTipo()}, mientras que ${mascota.getNombre()}, y ${mascota.getEnfermedad()}</li>
    </ul>
  `;
});
