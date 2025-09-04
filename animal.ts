// animal.ts
abstract class Animal {
  constructor(public nombre: string, public edad: number) {}
  abstract sonido(): string;
}

class Perro extends Animal {
  constructor(nombre: string, edad: number, public raza: string) {
    super(nombre, edad);
  }
  override sonido(): string {
    return "Guau";
  }
}

class Gato extends Animal {
  constructor(nombre: string, edad: number, public colorPelo: string) {
    super(nombre, edad);
  }
  override sonido(): string {
    return "Miau";
  }
}

class Ave extends Animal {
  constructor(nombre: string, edad: number, public envergadura: number) {
    super(nombre, edad);
  }
  override sonido(): string {
    return "Pío";
  }
}

// --- Instanciación y demostración ---
const perro = new Perro("Firulais", 4, "Labrador");
const gato = new Gato("Mishi", 2, "Atigrado");
const ave = new Ave("Piolín", 1, 0.35);

const animales: Animal[] = [perro, gato, ave];

for (const a of animales) {
  const extra =
    a instanceof Perro
      ? `Raza: ${a.raza}`
      : a instanceof Gato
      ? `Color de pelo: ${a.colorPelo}`
      : a instanceof Ave
      ? `Envergadura: ${a.envergadura} m`
      : "";

  console.log(`${a.nombre} (${a.edad} años) -> ${a.sonido()} | ${extra}`);
}
