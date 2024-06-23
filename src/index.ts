export class StringCalculator {
    add(numbers: string): number {
        if (numbers == null || numbers == undefined || numbers.length == 0 ) {
            return 0
        }
       
        if (numbers.length > 0) {
            let delimiter:string;
            let input;
            if(numbers.startsWith('//')){
                const newString = numbers.split('\n',2)
                delimiter = newString[0].substring(2).replace(/[\[\]]/g,'');
                console.log(delimiter);
                input = newString[1]
            }
            const newArr = delimiter? input.split(`${delimiter}`) : numbers.split(/[,\n]/)
            console.log(newArr);
            const negativeNumbers = newArr.filter((el) => {
                return parseInt(el) < 0
            })
            if (negativeNumbers.length > 0) {
                throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`)
            }else {
                const sum = newArr.reduce((acc, curr) => {
                    const num = parseInt(curr)
                    return (num<1000 && !Number.isNaN(num)) ? acc = acc + num : acc

                }, 0)
                return sum
            }

        }
    }
}


try{
    const calc = new StringCalculator()
    console.log(calc.add("1,2,,5"))
}catch(error){
  console.log(error.message)
}
