import defaultExportObj from './math.ts';
import * as mathLib from './math.ts';
import { PI } from './math.ts';

// bar
let obj = new defaultExportObj();
console.info(obj.foo());

// 3.14159
console.info(`mathLib.PI: ${mathLib.PI}`);
console.info(`PI: ${PI}`);

// 20
let result = mathLib.multiply(5, 4);
console.info(result);