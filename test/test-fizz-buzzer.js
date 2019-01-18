
const expect = require('chai').expect;

const fizzBuzzerTest = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    // test the normal case 
    it("should return fizz-buzz", function () {
        const normalCases = [30, 60, 90];
        normalCases.forEach((input) => {
            expect(fizzBuzzerTest(input)).to.equal('fizz-buzz');
        });
    });

    it('should return buzz if divided by five', function () {
        [5, 10, 20].forEach( (item) => {
            expect(fizzBuzzerTest(item)).to.equal('buzz');
        });
    });


    it('should return fizz if divide by 3', () => {
        [3, 6, 9].forEach( (x) => {
            expect(fizzBuzzerTest(x)).to.equal('fizz');
        });
    });

    it('should jsut return the entered value back if not one of the above', () => {
        [1, 2, 4].forEach((j) => {
            expect(fizzBuzzerTest(j)).to.equal(j);
        });
    });

    it('should return error if val is not a num', () => {
        ['a', true].forEach((k) => {
            expect(function () {
                fizzBuzzerTest(k);
            }).to.throw(Error);
        });
    });

// end if function
});

