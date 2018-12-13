export function introduceAnswer(currentUserAnswer, indexCurrentQuestion){
    return{
        type: "INTRODUCE_ANSWER",
        payload: {currentUserAnswer,indexCurrentQuestion}
    }

}