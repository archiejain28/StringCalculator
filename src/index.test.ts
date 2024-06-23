import {StringCalculator} from './index';

describe('Add method of String Calculator',()=>{
    test('Should return zero when empty string given',()=>{
        const calc = new StringCalculator()
        expect(calc.add('')).toEqual(0);
    })
    test('Should return sum when string comma-separated numbers given',()=>{
        const calc = new StringCalculator()
        expect(calc.add('1,2')).toEqual(3);
    })
    test('Should return sum when comma-separated and new lines between string of numbers given',()=>{
        const calc = new StringCalculator()
        expect(calc.add("1\n2,3")).toEqual(6);
    })
    test('Should not return NaN when splited array has empty string',()=>{
        const calc = new StringCalculator()
        expect(calc.add("1\n2,3\n\n")).not.toEqual(NaN);
    })
    test('Should throw error with negative numbers',()=>{
        const calc = new StringCalculator()
        expect(()=>calc.add("-1,-4,0")).toThrow(Error);
    })
    test('Should support different delimiter and return sum',()=>{
        const calc = new StringCalculator()
        expect(calc.add("//;\n1;2")).toEqual(3);
    })
    test('Should support delimiters of any length in given format and return sum',()=>{
        const calc = new StringCalculator()
        expect(calc.add("//[***]\n1***2***3")).toEqual(6);
    })
})