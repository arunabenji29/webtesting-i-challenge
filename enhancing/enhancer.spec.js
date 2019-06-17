const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('check if the durability is 100', () => {
            console.log('inside the repair test',enhancer.repair({durability:89}).durability)
            expect(enhancer.repair({durability:89}).durability).toBe(100);
            expect(enhancer.repair({durability:-89}).durability).toBe(100);
            expect(enhancer.repair({durability:100}).durability).toBe(100);
            expect(enhancer.repair({durability:0}).durability).toBe(100);
        })
    })
})
