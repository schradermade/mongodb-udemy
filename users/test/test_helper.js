const mongoose = require('mongoose');

// global.Promise is reference to ES6 implementation of promises
mongoose.Promise = global.Promise;

// Diff between beforeEach and before is that before only
// exectutes ONE time for all test suite
before((done) =>  {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error',(error) => {
      console.warn('Warning', error);
    });
})


beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Read to run the next test
    done();
  });
})