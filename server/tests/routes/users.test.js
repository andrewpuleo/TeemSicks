const request = require('supertest');
const { User } = require('../../models');
const app = require('../../app');
const truncate = require('../truncate');

describe('users', () => {
  // beforeAll(() => truncate());
  afterAll(() => User.Sequelize.close());
  it('should give back a user_id for a correct login', done => {
    User.create({ username: `test${new Date().getTime()}`, password: 'test' }).then(user =>
      request(app)
        .post('/users/login')
        .send({ username: user.username, password: user.password })
        .expect(200)
        .then(res => {
          expect(res.body).toEqual(user.id);
          done();
        })
    );
  });
  // it('should give back a error for login', done => {
  //   User.create({ username: `test${new Date().getTime()}`, password: 'test' }).then(user =>
  //     request(app)
  //       .post('/login')
  //       .send({ username: user.username, password: 'not correct' })
  //       .then(res => {
  //         expect(res.body).toEqual({ error: 'incorrect username or password' });
  //         done();
  //       })
  //   );
  // });
});
