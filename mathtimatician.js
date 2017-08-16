import defaultExportObj from './math.js';
import * as mathLib from './math.js';
import { PI } from './math.js';
// bar
let obj = new defaultExportObj();
console.info(obj.foo());
// 3.14159
console.info(`mathLib.PI: ${mathLib.PI}`);
console.info(`PI: ${PI}`);
// 20
let result = mathLib.multiply(5, 4);
console.info(result);
