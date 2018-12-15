export function introduceAnswer(currentUserAnswer, indexCurrentQuestion){
    return{
        type: "INTRODUCE_ANSWER",
        payload: {currentUserAnswer,indexCurrentQuestion}
    }

}

export function changeQuestion(index, change){
    return{
        Type: "CHANGE_QUESTION",
        Payload: {index, change}
    }
}

