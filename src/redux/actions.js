import {API} from "../assets/constants/constants";

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

export function fetchState() {
    return dispatch => {
        dispatch(fetchStateBegin());
        return fetch(API)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                return dispatch(fetchStateSuccess(json))
            })
            .catch(error=>{
                console.log(error);
                return dispatch(fetchStateFailure(error));
            });
    }

}

export function fetchStateBegin() {
    return { type: 'FETCH_STATE_BEGIN' }
}

export function fetchStateSuccess(json_received) {
    return{
        type: 'FETCH_STATE_SUCCESS',
        state: json_received
    }
}

export function fetchStateFailure(error) {
    return{
        type: 'FETCH_STATE_FAILURE',
        error: error
    }
}

// Handle errors
export function handleErrors(response) {
    if(!response.ok){
        console.log("ERROR!: "+ response.status.text);
        throw Error(response.status.text);
    }
    return response;
}