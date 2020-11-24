import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.events.on('change', () => {
  console.log('Changed!');
})

user.events.trigger('change');
