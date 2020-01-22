'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.
Note: You might need to use the same method more than once.
For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */

// const myFunc = function (target, input, sum) {

//   //if the first lement is a number, add to the sum if it matches the target. Recurse passing in the next element.
//   //else it must be an array, so recurse, passing intput[0] as the input.

//   //if it matches, pass in the next number in the array.
//   if (input[0] === target) {
//     console.log(++sum);
//     return myFunc(target, input[1], ++sum);

//     //if its an int that doesnt match, pass in the next number in the array.
//   } else if (typeof input[0] === 'number') {
//     console.log(sum);
//     return myFunc(target, input[1], sum);

//     //if its an array, drill down...
//   } else {
//     console.log(sum);
//     return myFunc(target, input[0], sum);
//   }
// }

//   if (input.length === 0) { return sum }
//   else if (typeof input[0] === 'object') {j
//     return myFunc(target, input[0], sum);
//   } else {
//     console.log('got into next array');
//     input.forEach(num => {
//       if (num === target) {
//         ++sum;
//         console.log('added to sum');
//       }
//       console.log(sum);
//     })
//     return sum;
//   }
// }

const count = (target, input) => {
  let sum = 0;
  input.forEach(element => {
    element = element.filter(number => {
      return number === target;
    })
    sum += element.length;
  })
  return sum
};
//so sad!! recursion is hard. This is a terrible solution that will only work with 2D arrays. And will break the input is a mixed bag. 

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.
You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.
For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  return input.reduce((sum, array) => {
    array.forEach(num => sum += num);
    return sum;
  }, 0)
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.
This function should first remove any elements that are not numbers or are not divisible by five.
This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.
For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].

[[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]]

[1, 2, 3], [5, 10, 15]

[['one', 'two', 'five'], ['5', '10', '15'], [5]]
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  return input.reduce((output, array) => {
    let elementOut = array.filter(number => number % 5 === 0 && typeof number === 'number').map(el => 2 ** el);
    output.push(elementOut);
    return output;
  }, [])
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.
The names should be combined into a single string with each character name separated by "and".
For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
  return data.filter(person => person.gender === 'male' || person.gender === 'female').map(person => person.name).join(' and ');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  let result = data.reduce((acc, person) => {
    if (acc.height > parseInt(person.height)) {
      console.log('person is shorter',acc.height, person.height );
      return { name: person.name, height: person.height }
    } else {
      console.log('previous person shorter', acc.height, person.height)
      return acc;
    }
  }, { name: 'Tyler', height: 1000 })
  return result.name;
};
//PARSE INT~~~!!
/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-10.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 3', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 5', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});