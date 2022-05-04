/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */

/**
 * this is final class which can not be extended by another class
 * but we can create an instance of this class by create method
 * ! An important thing is if we write protected instead of private
 * Still we can not create an instance of the class but we can extend it by another class
 */

class FinalClass {
  private constructor(private numbers: number[]) {}

  public static create(numbers: number[]) {
    return new FinalClass(numbers);
  }
}
FinalClass.create([1, 2, 3]);
