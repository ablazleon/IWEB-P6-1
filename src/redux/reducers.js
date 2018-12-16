import { combineReducers } from 'redux';

// auxiliar functions

// sum function
function add(a,b){
    return a+b;
}

// It is created a reducer per every attribute of teh state

function score(state=0, action = {}){
    switch(action.type){
        case "SUBMIT":
            return action.payload.questions.map((question)=>{

                // some questions might not have the userAnswer field yet
                var userAnswer = question.userAnswer ? question.userAnswer : "";
                return question.answer.toLowerCase()===userAnswer.toLowerCase();
            })
            .reduce(add);
        default:
            return state;
    }
}

function finished(state=false, action = {}){
    switch(action.type){
        case "SUBMIT":
            return true;
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
            // console.log("currentUserAnswer")
            // console.log(action.payload.currentUserAnswer)
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