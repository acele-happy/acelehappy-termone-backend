
const operands = ["+","-","/","*"]

export const DoMath =(req,res)=>{
//    const operation = req.body.operation
    const  {operator1,operator2,operation} = req.body
try{
   switch(operation){
    case "*":
        // console.log
        return res.status(200).send((operator1 * operator2).toString());
    case "/":
        return res.status(200).send((operator1 / operator2).toString());
    case "-":
        return res.status(200).send((operator1 - operator2).toString());
    
    case "+":
        return res.status(200).send((operator1 + operator2).toString());

    case "**":
        return res.status(200).send(Math.pow(operator1, operator2).toString());
    
    case "log":
        return res.status(200).send(operator1 * Math.log10(operator2).toString());

    case "ln":
        return res.status(200).send(operator1 * Math.log(operator2).toString());
    
    default:
        return res.status(200).send("Unknown operation")
   }
}catch(ex){
    return res.status(500).send(ex)
}
}