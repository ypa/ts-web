export class Attributes<T> {
  constructor(private data: T) {}

  // define as arrow function to avoid
  // JS 'this' bounded context gotcha
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    this.data = { ...this.data, ...update };
  }

  getAll(): T {
    return this.data;
  }
}

