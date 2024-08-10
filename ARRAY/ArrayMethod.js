const number = [1, 2, 3, 4, 5, 6, 7, 8];

//SOME  :  it tests whether at least one element in the array passes the test implemented by the provide function.

const atleastOneElemtAdd = number.some((num) => {
  return num % 2 == 10;
});

// output : false

//Filter :  it creates a new array with all elements that pass the test implemented by the provide function

const addNumbers = number.filter((num) => {
  return num % 2 == 0;
});

// Output : [ 2, 4, 6, 8 ]

// EVERY :  it tests whether all elements in the array pass test implemented by provide function it return boolean values

const allAreEven = number.every((num) => {
  return num % 2 !== 0;
});

//Ouput  :  false


// MAP : it creates new array populated results of calling a provided function on every element in the calling array

const MapNumber = number.filter((num) => {
  return num % 2 == 0;
});

//Ouput : [ 2, 4, 6, 8 ]

//FIND : if returns the first element in the provide array that satisfies the provide the testing function . if no values are satisfy the test function , undefined is returned

const findFirstOddNum = number.find((num) => {
  return num % 2 !== 0;
});

//output : 1

// INCLUDES : if determines whether an array includes a certain value among entries ,retuning true or false as appropriate

const animals = ["cat", "dog", "lion"];

const lionFind = animals.includes("lion");

// output : True

// for-Each it excutes a provide function once for each array elements

const Allanimals = ["cat", "dog", "lion"];

const printAnimals = Allanimals.forEach((animal) => {
  console.log(`animal name  : ${animal}`);
});

//  output :  animal name  : cat    animal name  : dog  animal name  : lion
