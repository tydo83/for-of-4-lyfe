# For Of 4 Lyfe

### Introduction

This will be an exercise in using function expressions and `for of` loops.

Most times you iterate through an array, you don't need the index you're currently on, so `for of` loops are the simpler and nicer-looking choice.

And every function should be declared with a function expression, because it keeps our functions from being reassigned, preventing many a potential bug.

Together, they make a dynamic duo, serving up simpler and safer syntax for solution-slingers!

That one got away from me. Sorry.


### Setup

1. Fork and clone.
2. Navigate into the directory.
3. Run `jest --watch-all`.
4. Code away in `main.test.js`, NOT `main.js`. (There isn't one for annoying technical test-related reasons.)
5. Read the tests further down in `main.test.js` for function usage examples!


### Guidelines

* Although we won't be testing for what kind of loop you'll be using, this isn't just an exercise in solving problems. Let's use our new `for of` loop!
* We WILL be testing for function expressions using `const`. If you aren't passing that particular test, look up function expressions again, or refer to our example!


### Challenge Descriptions

##### General Looping Problems

* `addAll` - given an array of numbers, returns the sum of all numbers added together.
* `countSpaces` - given a string, returns the number of characters that are spaces.
* `countTrues` - given an array of booleans, returns the number of `true` values.
* `makeFriendly` - given a paragraph, returns a paragraph where each sentence ends with an exclamation point instead of the period it held before.


##### Maps

* `cubeAll` - given an array of numbers, returns an array where each number has been cubed (a.k.a. raised to the third power).
* `addNoises` - given an array of strings, returns an array where each string has appended to it that animal's noise. See tests for examples! **HINT:** You're definitely going to have to check for each tested-for animal name, but you could use a compound boolean in your `if` check, or set up an array of your own animals and use `.includes`, or use a `switch` statement. Either way, you can look at the tests to see which names should be considered which animals!


##### Filters

* `womenOnly` - given an array of strings with names and gender, returns an array of only those strings where the gender (the last character in the string) is 'F'. **HINT:** you can check the character at last index of the string to see if it's an `F`, but there's also a string method that tells you if a string "ends with" another string. [Duck it!](https://duckduckgo.com/)
* `integersOnly` - given an array of numbers, returns an array of only those numbers that are integers. **HINT:** you can use modulus for htis, it's just SEEMS weird to do so.
