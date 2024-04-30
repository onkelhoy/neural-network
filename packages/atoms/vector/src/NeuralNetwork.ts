import { Layer } from "./layer";

export class NeuralNetwork {
  layers: Layer[] = [];

  constructor(...layersizes: number[][]) {
    for (let i=0; i<layersizes.length; i++) {
      this.layers.push(new Layer(layersizes[i][0], layersizes[i][1]));
    }
  }
}