/******************
 * YOUR CODE HERE *
 ******************/

//General Looping Problems
const addAll = function(numArray) {
  let sum = 0;
  // for(i = 0; i < numArray.length; i++) {
  //   sum += numArray[i]
  // }
  for(const num of numArray) {
    sum += num;
  }
  return sum;
} 

const countSpaces = function(string) {
  let count = 0;
  for(const char of string) {
    if(char === ' ') {
      count++;
    }
  }
  return count;
}

const countTrues = function(boolArray) {
  let count = 0;
  for(const bool of boolArray) {
    if(bool == true) {
      count++;
    }
  }
  return count;
}

const makeFriendly = function(str) {
  let newStr = '';
  for(const char of str) {
    if(char === '.'){
      newStr += '!';
    }
    else {
      newStr += char;
    }
  }
  return newStr; 
}

//Maps
const cubeAll = function(numArray) {
  const cubeArray = [];
  for(const num of numArray) {
    cubeArray.push(num * num * num);
  }
  return cubeArray;
}

const addNoises = function(animalArray) {
  const dogs = [
    'Fido',
    'Rolph',
    'Maisie',
  ];
  const cats = [
    'Garfield',
    'Heathcliff',
  ];
  const dinos = [
    'Barnie',
    'Sharp Tooth',
  ];
  const withNoise = [];
  for(const animal of animalArray) {
    if(dogs.includes(animal))
    withNoise.push(animal + ' says' + ' "Woof!"');  
    if(cats.includes(animal))
    withNoise.push(animal + ' says' + ' "Meow!"');
    if(dinos.includes(animal))
    withNoise.push(animal + ' says' + ' "ROWR."');
  }
  return withNoise;
}
//Switch? and Compound boolean?


//Filters
const womenOnly = function(strArray) {
  const onlyWomen = [];
  for(const char of strArray) {
    if(char.charAt(char.length-1) == 'F')
      onlyWomen.push(char);
  }
  return onlyWomen;
}

const integersOnly = function(numArray) {
  const integers = [];
  for(const num of numArray) {
    if(num % 1 == 0) {
      integers.push(num);
    }
  }
  return integers;
}

// const nums1 = [5, -5, 0.5]
// a = integersOnly(nums1);
// a;

// const nums2 = [0.9, 8, -100, 0.3];
// b = integersOnly(nums2);
// b;








/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/



if (typeof addAll === 'undefined') {
  addAll = undefined;
}

if (typeof countSpaces === 'undefined') {
  countSpaces = undefined;
}

if (typeof countTrues === 'undefined') {
  countTrues = undefined;
}

if (typeof makeFriendly === 'undefined') {
  makeFriendly = undefined;
}

if (typeof cubeAll === 'undefined') {
  cubeAll = undefined;
}

if (typeof addNoises === 'undefined') {
  addNoises = undefined;
}

if (typeof womenOnly === 'undefined') {
  womenOnly = undefined;
}

if (typeof integersOnly === 'undefined') {
  integersOnly = undefined;
}


describe('addAll', () => {
  it(`adds all the numbers in the array`, () => {
    const nums1 = [5, 3, 7, -11, 1003];
    const nums2 = [8, 1, 2, -53, -812];

    expect(addAll(nums1)).toBe(1007);
    expect(addAll(nums2)).toBe(-854);
  })

  it(`isn't reassignable`, () => {
    expect(() => addAll = 500).toThrow();
  })
})

describe(`countSpaces`, () => {
  it(`counts all the spaces in a multi-space string`, () => {
    const sentence1 = 'well hello there my crumpet';
    const sentence2 = 'strings 4 eva';

    expect(countSpaces(sentence1)).toBe(4);
    expect(countSpaces(sentence2)).toBe(2);
  })

  it(`correctly identifies strings with no spaces`, () => {
    const sentence1 = 'supercalifragilisticexpialidocious';
    const sentence2 = 'antidisestablishmentarianism';
    const sentence3 = 'pneunultramicroscopicsilicovulcanoconiosis';

    expect(countSpaces(sentence1)).toBe(0);
    expect(countSpaces(sentence2)).toBe(0);
    expect(countSpaces(sentence3)).toBe(0);
  })

  it(`doesn't count all non-letters as spaces`, () => {
    const sentence1 = 'how now, brown cow';
    const sentence2 = '@(*@ are you even talking about?';

    expect(countSpaces(sentence1)).toBe(3);
    expect(countSpaces(sentence2)).toBe(5);
  })

  it(`isn't reassignable`, () => {
    expect(() => countSpaces = 500).toThrow();
  })
})

describe(`countTrues`, () => {
  it(`counts all the trues in a true-only array`, () => {
    const bools1 = [true, true, true];
    const bools2 = [true, true, true, true, true];

    expect(countTrues(bools1)).toBe(3);
    expect(countTrues(bools2)).toBe(5);
  })

  it(`counts all the trues in an array of assorted booleans`, () => {
    const bools1 = [true, false, true, false];
    const bools2 = [true, false, false, true, true, false, false, true];

    expect(countTrues(bools1)).toBe(2);
    expect(countTrues(bools2)).toBe(4);
  })

  it(`doesn't confuse truthy values with true values`, () => {
    const values1 = [true, 'hello', 3, true, []]

    expect(countTrues(values1)).toBe(2);
  })

  it(`doesn't confuse the string 'true' with the boolean true`, () => {
    const values1 = [true, 'true', 'true', true, 'true'];
    const values2 = [true, 'true', 'true', true, true, 'true', 'true', true];

    expect(countTrues(values1)).toBe(2);
    expect(countTrues(values2)).toBe(4);
  })

  it(`isn't reassignable`, () => {
    expect(() => countTrues = 500).toThrow();
  })
})

describe('makeFriendly', () => {
  it(`given a paragraph, returns a paragraph where each sentence ends with an exclamation point instead of the period it held before.`, () => {
    const paragraph1 = `Do you see the story. Do you see anything. It seems to me I am trying to tell you a dream.`;
    const paragraph2 = `Like a running blaze on a plain, like a flash of lightning in the clouds. We live in the flicker.`;
      const paragraph3 = `What is that feeling when you’re driving away from people and they recede on the plain till you see their specks dispersing. It’s the too-huge world vaulting us, and it’s good-bye. But we lean forward to the next crazy venture beneath the skies. Nothing behind me, everything ahead of me, as is ever so on the road.`;

    const friendly1 = `Do you see the story! Do you see anything! It seems to me I am trying to tell you a dream!`;
    const friendly2 = `Like a running blaze on a plain, like a flash of lightning in the clouds! We live in the flicker!`;
    const friendly3 = `What is that feeling when you’re driving away from people and they recede on the plain till you see their specks dispersing! It’s the too-huge world vaulting us, and it’s good-bye! But we lean forward to the next crazy venture beneath the skies! Nothing behind me, everything ahead of me, as is ever so on the road!`;

    expect(makeFriendly(paragraph1)).toEqual(friendly1);
    expect(makeFriendly(paragraph2)).toEqual(friendly2);
    expect(makeFriendly(paragraph3)).toEqual(friendly3);
  })

  it(`isn't reassignable`, () => {
    expect(() => makeFriendly = 500).toThrow();
  })
})

describe('cubeAll', () => {
  it(`given an array of numbers, returns an array where each number has been cubed`, () => {
    const nums1 = [3, 2, 5];
    const cubes1 = [27, 8, 125];
    const nums2 = [1, 10, -2];
    const cubes2 = [1, 1000, -8];

    expect(cubeAll(nums1)).toEqual(cubes1);
    expect(cubeAll(nums2)).toEqual(cubes2);
  })

  it(`doesn't modify the original array`, () => {
    const nums1 = [3, 2, 5];
    const nums2 = [1, 10, -2];
    const originalNums1 = [3, 2, 5];
    const originalNums2 = [1, 10, -2];

    cubeAll(nums1);
    cubeAll(nums2);

    expect(nums1).toEqual(originalNums1);
    expect(nums2).toEqual(originalNums2);
  })

  it(`isn't reassignable`, () => {
    expect(() => cubeAll = 500).toThrow();
  })
})

describe('addNoises', () => {
    it('adds the appropriate noises for each animal in the given array', () => {
    const dogs = [
      'Fido',
      'Rolph',
      'Maisie',
    ];

    const cats = [
      'Garfield',
      'Heathcliff',
    ]

    const dinos = [
      'Barnie',
      'Sharp Tooth',
    ]

    const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const withNoises1 = ['Fido says "Woof!"', 'Garfield says "Meow!"', 'Sharp Tooth says "ROWR."'];
    const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
    const withNoises2 = ['Rolph says "Woof!"', 'Maisie says "Woof!"', 'Barnie says "ROWR."', 'Heathcliff says "Meow!"'];

    expect(addNoises(animals1)).toEqual(withNoises1);
    expect(addNoises(animals2)).toEqual(withNoises2);
  })

  it(`doesn't modify the original array`, () => {
    const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
    const originalAnimals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const originalAnimals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];

    addNoises(animals1);
    addNoises(animals2);

    expect(animals1).toEqual(originalAnimals1);
    expect(animals2).toEqual(originalAnimals2);
  })

  it(`isn't reassignable`, () => {
    expect(() => addNoises = 500).toThrow();
  })
})

describe('womenOnly', () => {
  it(`returns an array of only those strings in the given array where the last character is "F"`, () => {
    const people1 = [
      'Colin - M',
      'Mesuara - F',
      'Ginny - F',
      'Anthony - M',
    ]

    const answer1 = [
      'Mesuara - F',
      'Ginny - F',
    ]

    const people2 = [
      'Ted - M',
      'Melissa - F',
      'Biff - M',
      'Spiffs - F',
    ]

    const answer2 = [
      'Melissa - F',
      'Spiffs - F',
    ]

    expect(womenOnly(people1)).toEqual(answer1);
    expect(womenOnly(people2)).toEqual(answer2);
  })

  it(`doesn't modify the original array`, () => {
    const originalPeople1 = [
      'Colin - M',
      'Mesuara - F',
      'Ginny - F',
      'Anthony - M',
    ]

    const people1 = [
      'Colin - M',
      'Mesuara - F',
      'Ginny - F',
      'Anthony - M',
    ]

    const originalPeople2 = [
      'Ted - M',
      'Melissa - F',
      'Biff - M',
      'Spiffs - F',
    ]

    const people2 = [
      'Ted - M',
      'Melissa - F',
      'Biff - M',
      'Spiffs - F',
    ]

    womenOnly(people1)
    womenOnly(people2)

    expect(people1).toEqual(originalPeople1);
    expect(people2).toEqual(originalPeople2);
  })

  it(`isn't reassignable`, () => {
    expect(() => womenOnly = 500).toThrow();
  })
})

describe('integersOnly', () => {
  it(`returns an array of only those numbers in the given array where the number is an integer`, () => {
    const nums1 = [5, -5, 0.5]
    const answer1 = [5, -5]
    const nums2 = [0.9, 8, -100, 0.3];
    const answer2 = [8, -100];

    expect(integersOnly(nums1)).toEqual(answer1);
    expect(integersOnly(nums2)).toEqual(answer2);
  })

  it(`doesn't modify the original array`, () => {
    const originalNums1 = [5, 10, 3]

    const nums1 = [5, 10, 3]

    const originalNums2 = [8, 10, 24]

    const nums2 = [8, 10, 24]

    integersOnly(nums1)
    integersOnly(nums2)

    expect(nums1).toEqual(originalNums1);
    expect(nums2).toEqual(originalNums2);
  })

  it(`isn't reassignable`, () => {
    expect(() => integersOnly = 500).toThrow();
  })
})
