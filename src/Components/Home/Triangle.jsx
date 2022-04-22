import React from 'react'
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

export class ParticlesContainer  extends React.PureComponent {
  // this customizes the component tsParticles installation

  async customInit(Engine){
    // this adds the preset to tsParticles, you can safely use the
    loadTrianglesPreset(Engine);
  }

  render() {
    
    const options = {
      preset: "triangles",
      particles: {
        "number": {
          "value":window.screen.width * window.screen.height/20000,
          }
        }
    };

    return <Particles options={options} init={this.customInit} />;
  }
}