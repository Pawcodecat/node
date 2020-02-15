const myArray = [1, 2, 3]
.flatMap(x => [x, x*10, x*100]);

console.log(myArray);

const my2DArray = [['a', 'b'], ['c','d'],['e','f']]
.flatMap(x => x);

console.log(my2DArray);

const DArray = [[[01,02,03],
[010,020,030],
[01000,02000,03000]], 
[[1,2,3],
[10,20,30],
[1000,2000,3000]]]
.flatMap(x => x).flatMap(x => x);

console.log(DArray);