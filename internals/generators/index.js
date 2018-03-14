const componentGenerator = require('./component');
const moduleGenerator = require('./module');
const hocGenerator = require('./hoc');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('module', moduleGenerator);
  plop.setGenerator('high order component', hocGenerator);
};
