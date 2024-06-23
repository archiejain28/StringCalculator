export class StringCalculator {
    add(numbers: string): number {
        if (numbers.length == 0 || numbers == null) {
            return 0
        }
        if (numbers.length > 0) {
            const newArr = numbers.split(/[,\n]/)
            const negativeNumbers = newArr.filter((el) => {
                return parseInt(el) < 0
            })
            if (negativeNumbers.length > 0) {
                throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`)
            }else {
                const sum = newArr.reduce((acc, curr) => {
                    return curr ? acc = acc + parseInt(curr) : acc
                }, 0)
                return sum
            }

        }
    }
}


try{
    const calc = new StringCalculator()
    console.log(calc.add("1,-2,-4"))
}catch(error){
  console.log(error.message)
}
