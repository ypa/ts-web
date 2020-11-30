import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';


const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  User.buildUser
);

collection.on('change', () => {
  console.log(collection);
})

collection.fetch();
