'use state'

import React from 'react';
import { storiesOf, action } from '@kadira/storybook'
import Actions from './index'

storiesOf('Actions', module)
  .add('first story', () => (
    <Actions
      getRepos={action('Get repos')}
      getStarred={action('Get starred')}
    />
  ))
