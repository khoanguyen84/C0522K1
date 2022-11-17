// import sum, * as myMath from './library.js';
// const { minus, times } = myMath
import sum, { minus, times, useState } from './library.js';

const [state, setState] = useState(1);

console.log(sum(2, 4, 5, 4, 3, 2, 2, 3, 4, 2));
console.log(minus(12, 3));
console.log(times(12, 3));