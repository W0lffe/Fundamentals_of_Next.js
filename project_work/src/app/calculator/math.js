
export default function calculate(string) {

    const values = string.split(/([+\-/*])/).filter(value => value !== "");
    console.log(values)

    if(values.length < 3){
        return {calcError: "Need 2 values to start operation!"}
    }

    const operator = values[1];
    const v1 = values[0];
    const v2 = values[2];

    let result = 0;
    switch(operator){
        case "+": 
            result = Number(v1) + Number(v2)
            break;
        case "-":
            result = Number(v1) - Number(v2)
            break;
        case "/":
            if(Number(v2) === 0){
                result = "INFINITE!"
                break;
            }
            if(Number(v1) === 0){
                result = 0;
                break;
            }
            result = Number(v1) / Number(v2)
            break;
        case "*":
            result = Number(v1) * Number(v2)
            break;
    }

    return {result};


}