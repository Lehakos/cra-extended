/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const ROOT_FOLDER = '../../../src';

const componentExists = filePath => fs.existsSync(
  path.join(__dirname, ROOT_FOLDER, filePath)
);

module.exports = componentExists;
