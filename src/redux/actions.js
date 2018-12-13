export function introduceAnswer(currentUserAnswer, indexCurrentQuestion){
    return{
        type: "INTRODUCE_ANSWER",
        paylod: {currentUserAnswer,indexCurrentQuestion}
    }
}