export function introduceAnswer(currentUserAnswer, indexCurrentQuestion){
    return{
        type: "INTRODUCE_ANSWER",
        payload: {currentUserAnswer,indexCurrentQuestion}
    }

}

export function changeQuestion(index, change){
    return{
        type: "CHANGE_QUESTION",
        payload: {index, change}
    }
}

export function submit(questions){
	return{
		type: "SUBMIT",
		payload: {questions}
	}
}

