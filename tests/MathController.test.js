// import MathController from '../controllers/MathController'

describe("Simple Calculator Tests",()=>{
    test("multiplication",()=>{
        // const {operand1,operand2,operator} = req.body
        const op1 = 3
        const op2 = 4
        const result = op1*op2
        expect(result).toBe(12)

    })

    test("Addition",()=>{
        // const {operand1,operand2,operator} = req.body
        const op1 = 3
        const op2 = 4
        const result = op1+op2

        expect(result).toBe(7)
    })

    test("Subtraction",()=>{
        // const {operand1,operand2,operator} = req.body
        const op1 = 3
        const op2 = 4
        const result = op1-op2

        expect(result).toBe(-1)
    })
})