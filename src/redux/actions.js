export function introduceAnswer(currentUserAnswer, indexCurrentQuestion){
    return{
        type: "INTRODUCE_ANSWER",
        currentUserAnswer: currentUserAnswer,
        indexCurrentQuestion: indexCurrentQuestion
    }
}