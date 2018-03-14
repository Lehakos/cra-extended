const changeCase = require('change-case');

const fileExists = require('../utils/fileExists');

module.exports = {
  description: 'Создать новый компонент',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Выберите тип компонента',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'path',
    message: 'Введите путь по которому разместить компонент',
    default: 'components',
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
    default: 'Button',
    validate: (value, answers) => {
      if ((/.+/).test(value)) {
        const camelCaseName = changeCase.camelCase(value);
        const pascalCaseName = changeCase.pascalCase(value);
        return fileExists(`${answers.path}/${camelCaseName}/${pascalCaseName}.jsx`)
          ? 'Компонент с таким именем уже существует'
          : true;
      }

      return 'Введите название';
    },
  }, {
    type: 'confirm',
    name: 'wantPropTypes',
    default: true,
    message: 'Добавить propTypes компоненту?',
  }, {
    type: 'confirm',
    name: 'wantStyles',
    default: true,
    message: 'Добавить файл стилей?',
  }, {
    type: 'confirm',
    name: 'wantStory',
    default: true,
    message: 'Добавить story файл?',
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './component/es6.jsx.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './component/es6.pure.jsx.hbs';
        break;
      }
      case 'Stateless Function':
      default: {
        componentTemplate = './component/stateless.jsx.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../src/{{path}}/{{camelCase name}}/{{pascalCase name}}.jsx',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/{{path}}/{{camelCase name}}/{{pascalCase name}}.test.js',
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/{{path}}/{{camelCase name}}/index.js',
      templateFile: './component/index.js.hbs',
      abortOnFail: true,
    }];

    if (data.wantPropTypes) {
      actions.push({
        type: 'add',
        path: '../../src/{{path}}/{{camelCase name}}/{{pascalCase name}}.types.js',
        templateFile: './component/types.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantStyles) {
      actions.push({
        type: 'add',
        path: '../../src/{{path}}/{{camelCase name}}/{{pascalCase name}}.style.js',
        templateFile: './component/styles.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantStory) {
      actions.push({
        type: 'add',
        path: '../../src/{{path}}/{{camelCase name}}/{{pascalCase name}}.story.jsx',
        templateFile: './component/story.jsx.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
