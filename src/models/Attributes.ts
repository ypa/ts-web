import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) { }

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}


const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'afdasf'
});

const name = attrs.get('name');
const age = attrs.get('age');
const id = attrs.get('id');
