const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('check if the durability is 100', () => {
            // console.log('inside the repair test',enhancer.repair({durability:89}).durability)
            expect(enhancer.repair({durability:89}).durability).toBe(100);
            expect(enhancer.repair({durability:-89}).durability).toBe(100);
            expect(enhancer.repair({durability:100}).durability).toBe(100);
            expect(enhancer.repair({durability:0}).durability).toBe(100);
        });
    });

    describe('success()', () => {
        it('check if the enhancement level increases by 1, if the value is below 20', () => {
            
            expect(enhancer.succeed({enhancement:19}).enhancement).toBe(20);
            expect(enhancer.succeed({enhancement:20}).enhancement).toBe(20);
            expect(enhancer.succeed({enhancement:-20}).enhancement).toBe(-19);
            expect(enhancer.succeed({enhancement:0}).enhancement).toBe(1);
        });
    });
});
