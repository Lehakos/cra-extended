const changeCase = require('change-case');

const fileExists = require('../utils/fileExists');

module.exports = {
  description: 'Создать компонент высшего порядка',
  prompts: [{
    type: 'input',
    name: 'path',
    message: 'Введите путь по которому разместить компонент',
    default: 'modules/app',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return true;
      }

      return 'Введите путь';
    },
  }, {
    type: 'input',
    name: 'name',
    message: 'Введите название компонента',
    default: 'withSomething',
    validate: (value, answers) => {
      if ((/.+/).test(value)) {
        return fileExists(`${answers.path}/${changeCase.camelCase(value)}.jsx`)
          ? 'Компонент высшего порядка с таким именем уже существует'
          : true;
      }

      return 'Введите название';
    },
  }],
  actions: (data) => {
    const actions = [{
      type: 'add',
      path: '../../src/{{path}}/{{camelCase name}}.jsx',
      templateFile: './hoc/index.jsx.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
