import { combineReducers } from 'redux';

// It is created a reducer per every attribute of teh state

function score(state=0, action = {}){
    switch(action.type){
        default:
            return state;
    }
}

function finished(state=false, action = {}){
    switch(action.type){
        default:
            return state;
    }
}

function indexCurrentQuestion(state=0, action ){
    switch(action.type){
        case 'CHANGE_QUESTION':
        // I want to incrase or decrese the index.
            return (action.payload.change === 'nextQ') ? (++state) : (--state);
        default:
            return state;
    }
}

function questions(state=[], action){
    switch(action.type){
        case 'INTRODUCE_ANSWER':
            // It gives an array
            return state.map((question, i)=>{ // It gives question
                // It give per loop an object
               return {
                   ...question,
                   // If the indexCurrentQuestion is i, cahnge, if not dejalo como está
                   // It assigns a certain value
                   userAnswer: i === action.payload.indexCurrentQuestion ?
                       action.payload.currentUserAnswer : question.userAnswer
               }
            });

        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    indexCurrentQuestion,
    questions
}));

export default GlobalState;