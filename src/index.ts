import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

// console.log(user.get('name'));


// reminder on how 'this' workds in Javascript

const colors = {
  color: 'red',
  printColor() {
    // rule of thumb for 'this' is it's always referring to the left of function
    console.log(this.color);
  }
}

// Here 'this' is the object colors so it prints out 'red' just fine
colors.printColor();

// if we destructure printColor out to another variable
const printColor = colors.printColor;
// And call it, now 'this' is undefined
// and the function throws exception TypeError: Cannot read property 'color' of undefined
printColor();
