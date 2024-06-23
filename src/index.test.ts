import {StringCalculator} from './index';

describe('Add method of String Calculator',()=>{
    test('Should return zero when empty string given',()=>{
        const calc = new StringCalculator()
        expect(calc.add('')).toEqual(0);
    })
    test('Should return sum when string comma-separated numbers given',()=>{
        const calc = new StringCalculator()
        expect(calc.add('1,6,8')).toEqual(15);
    })
})