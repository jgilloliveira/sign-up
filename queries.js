var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/usuariodb';
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'usuariodb',
    user: '',
    password: ''
};
var db = pgp(cn);

// add query functions
module.exports = {
  createUsuario: createUsuario
};

function createUsuario(req, res, next) {
    db.none('insert into usuarios(correo, password)' +
        'values(${correo}, ${password})',
        req.body)
      .then(function () {
            res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one usuario'
        });
    })
    .catch(function (err) {
        return next(err);
    });
}