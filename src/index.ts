export class StringCalculator {  
 add(numbers: string): number {
    if (numbers.length == 0 || numbers == null) {
        return 0
    }
    if(numbers.length > 0){
        const newArr = numbers.split(/[,\n]/)
        console.log(newArr)
        const sum = newArr.reduce((acc, curr)=>{
            acc = acc + parseInt(curr)
            return acc
        },0)
        return sum
    }
 }
}

const calc = new StringCalculator()

console.log(calc.add("1\n2,3"))