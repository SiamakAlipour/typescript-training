/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */

class FinalClass {
  private constructor(private numbers: number[]) {}

  public static create(numbers: number[]) {
    return new FinalClass(numbers);
  }
}

FinalClass.create([1, 2, 3]);
