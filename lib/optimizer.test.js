import {test} from 'node:test';
import assert from 'node:assert/strict';
import {calculate,initialItems} from './optimizer.js';
test('sample totals and split agree',()=>{const r=calculate(initialItems,10);assert.deepEqual(r.totals,[2245,2480,2910]);assert.equal(r.savings,680);assert.equal(r.splitTotal,1565);assert(r.net>0);assert(calculate(initialItems,20).net<0);});
test('quantities, unknown items and empty cart',()=>{assert.equal(calculate([{id:'milk',quantity:2}]).totals[0],870);assert.equal(calculate([{id:'custom',quantity:1}]).unknown,1);assert.equal(calculate([]).savings,0);assert.equal(calculate([]).extraMinutes,0);});
