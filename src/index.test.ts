import {StringCalculator} from './index';

describe('Add method of String Calculator',()=>{
    test('Should return zero when empty string given',()=>{
        const calc = new StringCalculator()
        expect(calc.add('')).toEqual(0)
    })
})