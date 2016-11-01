import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity obj-model="obj: #vive-obj; mtl: #vive-mtl" {...props}>
    <Entity obj-model={{obj: '#vive-pad-obj', mtl: '#vive-pad-mtl'}} />
    <Entity obj-model={{obj: '#vive-trigger-obj', mtl: '#vive-trigger-mtl'}} />
    <Entity obj-model={{obj: '#vive-l-grip-obj', mtl: '#vive-l-grip-mtl'}} />
    <Entity obj-model={{obj: '#vive-r-grip-obj', mtl: '#vive-r-grip-mtl'}} />
    <Entity obj-model={{obj: '#vive-button-obj', mtl: '#vive-button-mtl'}} />
    <Entity obj-model={{obj: '#vive-sys-button-obj', mtl: '#vive-sys-button-mtl'}} />
    <Entity obj-model={{obj: '#vive-led-obj', mtl: '#vive-led-mtl'}} />
  </Entity>
);
