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

    describe('fail()', () => {
        it('check if the enhancement level increases by 1, if the value is below 20', () => {
            
            expect(enhancer.fail({enhancement:21}).enhancement).toBe(20);
            
            expect(enhancer.fail({enhancement:20,durability:0}).enhancement).toBe(19);
            expect(enhancer.fail({enhancement:19,durability:0}).enhancement).toBe(18);
            expect(enhancer.fail({enhancement:16}).enhancement).toBe(15);
            expect(enhancer.fail({enhancement:15,durability:95}).durability).toBe(85);
            expect(enhancer.fail({enhancement:14,durability:45}).durability).toBe(40);
            expect(enhancer.fail({enhancement:5,durability:5}).durability).toBe(0);
            expect(enhancer.fail({enhancement:5,durability:0}).durability).toBe(0);
            expect(enhancer.fail({enhancement:0,durability:10}).durability).toBe(5);
        });
    });
});
