import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'aframe-webvr-controller';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';
import Controller from './components/Controller';

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
>
          </a-cursor>
        </Camera>
        <a-assets>
          <a-asset-item id="vive-obj" src="/vive_controller/body0.obj"></a-asset-item>
          <a-asset-item id="vive-mtl" src="/vive_controller/body0.mtl"></a-asset-item>
          <a-asset-item id="vive-pad-obj" src="/vive_controller/trackpad0.obj"></a-asset-item>
          <a-asset-item id="vive-pad-mtl" src="/vive_controller/trackpad0.mtl"></a-asset-item>
          <a-asset-item id="vive-trigger-obj" src="/vive_controller/trigger0.obj"></a-asset-item>
          <a-asset-item id="vive-trigger-mtl" src="/vive_controller/trigger0.mtl"></a-asset-item>
          <a-asset-item id="vive-r-grip-obj" src="/vive_controller/r_grip0.obj"></a-asset-item>
          <a-asset-item id="vive-r-grip-mtl" src="/vive_controller/r_grip0.mtl"></a-asset-item>
          <a-asset-item id="vive-l-grip-obj" src="/vive_controller/l_grip0.obj"></a-asset-item>
          <a-asset-item id="vive-l-grip-mtl" src="/vive_controller/l_grip0.mtl"></a-asset-item>
          <a-asset-item id="vive-button-obj" src="/vive_controller/button0.obj"></a-asset-item>
          <a-asset-item id="vive-button-mtl" src="/vive_controller/button0.mtl"></a-asset-item>
          <a-asset-item id="vive-sys-button-obj" src="/vive_controller/sys_button0.obj"></a-asset-item>
          <a-asset-item id="vive-sys-button-mtl" src="/vive_controller/sys_button0.mtl"></a-asset-item>
          <a-asset-item id="vive-led-obj" src="/vive_controller/led0.obj"></a-asset-item>
          <a-asset-item id="vive-led-mtl" src="/vive_controller/led0.mtl"></a-asset-item>
        </a-assets>

        <Sky src="url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"/>

        <Text
          text='Hello World!'
          color='#DADADA'
          position='-1.75 1 -3'/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>
        <Controller vive-controller="0" />
        <Controller vive-controller="1" />
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
