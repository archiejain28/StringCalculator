export class StringCalculator {  
 add(numbers: string): number {
    if (numbers.length == 0 || numbers == null) {
        return 0
    }
 }
}

const calc = new StringCalculator()

console.log(calc.add(''))