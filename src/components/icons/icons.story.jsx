import React from 'react';
import { storiesOf } from '@storybook/react';

import * as icons from '.';

const story = storiesOf('group ICONS', module);

Object.entries(icons).forEach(([name, Icon]) => {
  story.addWithInfo(
    name,
    () => <Icon />,
    { inline: true },
  );
});
