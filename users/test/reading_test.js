const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;

  beforeEach((done) =>  {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(()  =>  done());
  });

  it('finds all users with a name of joe', (done) =>  {
    // Here we are referencing User Model/Class, not specific user
    User.find({ name: 'Joe' })
      .then((users)  =>  {
        console.log(users);
        done();
      });
  });
});