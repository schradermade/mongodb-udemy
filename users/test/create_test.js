const { doesNotMatch } = require('assert');
const assert = require('assert');
const User = require('../src/user')

describe('Creating records', () =>  {
  it('saves a user', (done) =>  {
    // use the User Model to create new instance of User
    // Joe does not automatically get saved to database
    const joe = new User({ name: 'Joe' });

    // save or "persist" him to the database
    joe.save()
      .then(()  => {
        // Has joe been saves successfully?
        assert(!joe.isNew);
        done();
      });
  });
});

// Successful end-to-end test:
//  1. Made new instance of user
//  2. Saved joe
//  3. Asserted that joe was successfuly saved to database