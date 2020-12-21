/**
 * @description MathFundamental adalah utility untuk melakukan perhitungan matematika dasar
 */
declare namespace nodeMath {

  // membuat fungsi interface untuk masing - masing method function

  interface MathAddtion {
    addition: () => :number
  }

  interface MathDivision {
    division: () => :number
  }

  interface MathExponentiation {
    exponentiation: () => :number
  }

  interface MathModulus {
    modulus: () => :number
  }

  interface MathMultiplication {
    multiplication: () => :number
  }

  interface MathSubtraction {
    subtraction: () => :number
  }

  interface MathGreatherThan {
    greaterThan: () => :boolean
  }


  interface MathLessThan {
    lessThan: () => :boolean
  }


  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk meng hitungan pertambahan
   * @return number
   */
  function addition(x: number, y: number): MathAddtion {}
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk menghitungan pembagian
   * @return number
   */
  function division(x: number, y: number): MathDivision {}
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk menghitung pangkat
   * @return number
   */
  function exponentiation(x: number, y: number): MathExponentiation {}
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk menghitung sisabagi
   * @return number
   */
  function modulus(x: number, y: number): MathModulus {}
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk menghitung perkalian
   * @return number
   */
  function multiplication(x: number, y: number): MathMultiplication {}
  /**
   * @params { x: number, y: number }
   * @description untuk menghitung perkalian
   * @return number
   */
  function subtraction(x: number, y: number): MathSubtraction {}
   /**
   * @params { x: number, y: number }
   * @description untuk komparasi angka lebih nesar
   * @return boolean
   */
  function greaterThan(x: number, y: number): MathGreatherThan {}
  /**
   * @params { x: number, y: number }
   * @description untuk komparasi angka lebih kecil
   * @return boolean
   */
  function lessThan(x: number, y: number): MathLessThan {}
}
// export module type defination
export = nodeMath
