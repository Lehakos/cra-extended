const changeCase = require('change-case');

const fileExists = require('../utils/fileExists');

module.exports = {
  description: 'Добавить новый redux модуль',
  prompts: [{
    type: 'input',
    name: 'path',
    message: 'Введите путь по которому разместить модуль',
    default: 'modules',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return true;
      }

      return 'Введите путь';
    },
  }, {
    type: 'input',
    name: 'name',
    message: 'Введите название модуля',
    default: 'auth',
    validate: (value, answers) => {
      if ((/.+/).test(value)) {
        return fileExists(`${answers.path}/${changeCase.camelCase(value)}`)
          ? 'Модуль с таким именем уже существует'
          : true;
      }

      return 'Введите название';
    },
  }, {
    type: 'confirm',
    name: 'wantApi',
    default: false,
    message: 'Добавить api файл?',
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [{
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/index.js',
      templateFile: './module/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/actions.{{camelCase name}}.js',
      templateFile: './module/actions.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/reducer.{{camelCase name}}.js',
      templateFile: './module/reducer.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/__tests__/reducer.{{camelCase name}}.test.js',
      templateFile: './module/reducer.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/sagas.{{camelCase name}}.js',
      templateFile: './module/sagas.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/__tests__/sagas.{{camelCase name}}.test.js',
      templateFile: './module/sagas.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/selectors.{{camelCase name}}.js',
      templateFile: './module/selectors.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/__tests__/selectors.{{camelCase name}}.test.js',
      templateFile: './module/selectors.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/actionTypes.{{camelCase name}}.js',
      templateFile: './module/actionTypes.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/modules/{{camelCase name}}/redux/index.js',
      templateFile: './module/reduxIndex.js.hbs',
      abortOnFail: true,
    }];

    if (data.wantApi) {
      actions.push({
        type: 'add',
        path: '../../src/modules/{{camelCase name}}/redux/services.{{camelCase name}}.js',
        templateFile: './module/services.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
