import React from 'react';
import { render } from 'react-dom';
// import './index.scss';

import Pnd from './pnd';

const div = document.createElement('div');
document.body.append(div);

render(<Pnd/>, div);