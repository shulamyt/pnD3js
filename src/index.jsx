import React from 'react';
import { render } from 'react-dom';
// import './index.scss';

import Pnd from './pnd';

const div = document.createElement('div');
document.body.append(div);

var plan = {
  "name" : "A",
  "children" : [
    {"name" : "A1" },
    {"name" : "A2" },
    {
      "name" : "A3",
      "children": [
        {
          "name" : "A31",
          "children" : [
            {"name" : "A311" },
            {"name" : "A312" }
          ]
        }
      ]
    }
  ]
};

render(<Pnd plan={plan} />, div);

