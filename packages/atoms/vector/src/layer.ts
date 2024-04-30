import { Vector } from "./vector";
import { Matrix } from "./matrix";

type Value = {
  weight: number;
  bias: number;
}
type Dataset = {
  input: number[];
  output: number[];
}

export class Layer {
  weights: Matrix;
  biases: Vector;

  // NOTE the idea is to update weghtsum as weights can updated 
  weightsum: number[] = [];

  constructor(row:number, col:number) {
    // init
    let biasesarray:number[] = [];
    for (let i=0; i<row; i++) {
      biasesarray.push(this.getBias(i));
      this.weightsum[i] = 0;
    }

    this.weights = new Matrix(row, col, this.getWeight);
    this.biases = new Vector(biasesarray);
  }

  // the cores
  train(batches: Dataset[]) {
    for (let batch of batches) {
      this.singletrain(batch);
    }
  }
  feedforward(input: number[]) {
    let output = input;
    for (let i = 0; i < this.value.length; i++) {
      const nextOutput: number[] = [];
      for (let j = 0; j < this.value[i].length; j++) {
        const sum = output.reduce((acc, inputVal, index) => acc + inputVal * this.value[i][j].weight, this.value[i][j].bias);
        nextOutput.push(this.activation(sum));
      }
      output = nextOutput; // Update the output to the next layer's output
      // Optionally store each layer's output if needed for backpropagation
    }
    return output;
  }
  backpropage() {

  }

  // activation
  activation(value: number) {
    // default leaky relu
    if (value > 0) return value;
    return 0.01 * value;
  }
  deritive_activation(value: number) {
    return value;
  }

  // private functions
  private getWeight(row:number, col: number) {
    const value = Math.random();    
    this.weightsum[row] += value;
    return value;
  }
  private getBias(row:number) {
    return Math.random();
  }
  private singletrain(dataset: Dataset) {
    this.feedforward(dataset.input);
  }
}