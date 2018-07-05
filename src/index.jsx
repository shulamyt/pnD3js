import React from 'react';
import { render } from 'react-dom';
// import './index.scss';

import Pnd from './pnd';

const div = document.createElement('div');
document.body.append(div);

let i = 0;
setInterval(() => {
  i += 1;
  const activity = {
    name: i
  };
  render(<Pnd activity={activity} />, div);
}, 3000);
