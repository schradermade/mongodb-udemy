const assert = require('assert');
const User = require('../src/user')

describe('Creating records', () =>  {
  it('saves a user', () =>  {
    // use the User Model to create new instance of User
    // Joe does not automatically get saved to database
    const joe = new User({ name: 'Joe' });

    // save or "persist" him to the database
    joe.save();
  });
});