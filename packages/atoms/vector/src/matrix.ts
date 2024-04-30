type DefaultCallbackFunction = (row:number,col:number) => number;

export class Matrix {
  value: number[][] = [];
  
  constructor(row: number|number[]|[], col: number, default_value:DefaultCallbackFunction = () => 0) {
    if (typeof row === "number")
    {
      this.value = new Array(row).fill(0).map((v, rowindex) => new Array(col).fill(0).map((v, colindex) => default_value(rowindex, colindex)));
    }
    else 
    {
      this.value = row as number[][];
    }
  }

  // map
  map(callback: (value:number, row:number, col:number) => number) {
    for (let i=0; i<this.value.length; i++) {
      for (let j=0; j<this.value[i].length; j++) {
        this.value[i][j] = callback(this.value[i][j], i, j);
      }
    }
  }

  // addition
  add(val: number|Matrix) {
    if (typeof val === "number")
    {
      this.map(v => v + val);
    }
    else 
    {
      const arr = (val as Matrix).value;
      this.map((v, r, c) => v + (arr[r]?.[c] || 0));
    }
  }
  subtract(val: Number|Matrix) {
    if (typeof val === "number")
    {
      this.map(v => v - val);
    }
    else 
    {
      const arr = (val as Matrix).value;
      this.map((v, r, c) => v - (arr[r]?.[c] || 0));
    }
  }

  // multiplication
  mul(b: Matrix) {
    // A is an m x n matrix, B is an n x p matrix
    let m = this.value.length;
    let n = this.value[0].length;
    let p = b.value[0].length;

    // Check if the multiplication is possible
    if (n !== b.value.length) {
        throw new Error("Number of columns in Matrix A must be equal to number of rows in Matrix B");
    }

    // Initialize the result matrix with zeros
    let result = new Array(m).fill(0).map(() => new Array(p).fill(0));

    // Perform matrix multiplication
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < p; j++) {
        for (let k = 0; k < n; k++) {
          result[i][j] += this.value[i][k] * b.value[k][j];
        }
      }
    }

    return result;
  }
  mul_plain(val: Number|Matrix) {
    if (typeof val === "number")
    {
      this.map(v => v * val);
    }
    else 
    {
      const arr = (val as Matrix).value;
      this.map((v, r, c) => v * (arr[r]?.[c] || 1));
    }
  }
  divide_plain(val: Number|Matrix) {
    if (typeof val === "number")
    {
      this.map(v => v / val);
    }
    else 
    {
      const arr = (val as Matrix).value;
      this.map((v, r, c) => v / (arr[r]?.[c] || 1));
    }
  }
}