
export class Vector {
  dimensions: number[];

  constructor(dimension: number[] = []) {
    this.dimensions = dimension;
  }

  // addition
  add(val: Number|Number[]) {
    if (typeof val === "number")
    {
      this.dimensions = this.dimensions.map(n => n + val);
    }
    else 
    {
      const arr = val as number[];
      this.dimensions = this.dimensions.map((n, i) => n + (arr?.[i] ?? 1));
    }
  }
  subtract(val: Number|Number[]) {
    if (typeof val === "number")
    {
      this.dimensions = this.dimensions.map(n => n - val);
    }
    else 
    {
      const arr = val as number[];
      this.dimensions = this.dimensions.map((n, i) => n - (arr?.[i] ?? 1));
    }
  }

  // multiplication
  mul(val: Number|Number[]) {
    if (typeof val === "number")
    {
      this.dimensions = this.dimensions.map(n => n * val);
    }
    else 
    {
      const arr = val as number[];
      this.dimensions = this.dimensions.map((n, i) => n * (arr?.[i] ?? 1));
    }
  }
  divide(val: Number|Number[]) {
    if (typeof val === "number")
    {
      this.dimensions = this.dimensions.map(n => n / val);
    }
    else 
    {
      const arr = val as number[];
      this.dimensions = this.dimensions.map((n, i) => n / (arr?.[i] ?? 1));
    }
  }
}