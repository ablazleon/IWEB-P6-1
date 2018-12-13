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

function indexCurrentQuestion(state=0, action = {}){
    switch(action.type){
        default:
            return state;
    }
}

function questions(state=[], action = {}){
    switch(action.type){
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