const { User, Session, ToDo } = require('../models');

const models = [ToDo, Session, User];

// Prof Fox says this will need to be edited due to associations
// that is removing them in a certain order
module.exports = function truncate() {
  return Promise.all(
    models.map(model =>
      model.destroy({
        where: {},
        force: true
      })
    )
  );
};
