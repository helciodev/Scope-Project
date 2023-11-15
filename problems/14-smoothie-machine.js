/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of 
how your return should be formatted!

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

function smoothieTransformer(arr) {
  return (
    `I'm having a smoothie with ` +
    arr.map((el, i) => (i === 0 ? `${el}` : `and ${el}`)).join(" ")
  );
}

const smoothieMachine = (...ingredients) => {
  let moreIngredients = [];
  return function (...args) {
    if (!moreIngredients.length) {
      moreIngredients = [...moreIngredients, ...args];
    } else {
      args.forEach((el) => {
        if (!moreIngredients.includes(el)) moreIngredients.push(el);
      });
    }
    if (ingredients.length) {
      return smoothieTransformer([...ingredients, ...moreIngredients]);
    } else {
      return smoothieTransformer(moreIngredients);
    }
  };
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  return null;
}
