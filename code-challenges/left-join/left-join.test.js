function join (map1, map2, direction) {
  //the space complexity here is increased to O(n), beacuse we are going to copy the first map onto this map. This could be easily eliminated if we are allowed to modify the input. Otherwise some additional structure will be required. 
  let output = new Map();

  //base and addition are just references. --> O(1)
  let base, addition;

  //switch behavior based on 'left' / 'right'
  switch (direction) {
    case 'left': 
      base = map1;
      addition = map2;
      break;
    case 'right': 
      base = map2;
      addition = map1;
      break;
    default: 
      return null
  }
  // forEach on map1 means that we have O(n) time complexity, at least.
  //.set() and .get() functions are O(logN) when used on the JS Map object. 
  //Since for each of map1 we do logN on another map, we have an overall complexity of O(nlogn). Is this good enough ?
  base.forEach((value, key) => {
    if (addition.has(key)) base.set(key, [value, addition.get(key)])
    else base.set(key, [value, null])
  })
  console.log(base);
  return base;
}

const myMap = new Map()
myMap.set('tyler', 'hi')
const myMap2 = new Map()
myMap2.set('tyler', 'yo')
myMap2.set('abc', 'hi')
myMap2.set('def', '98')

join(myMap, myMap2, 'right')