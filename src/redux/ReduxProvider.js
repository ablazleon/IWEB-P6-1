// It "provides" the Redux's store to the React App

import { Provider } from 'react-redux';
import GlobalState from './reducers.js';
import { createStore } from 'redux';
import React, { component } from 'react';
import App from '../App';

// Import questions
import { questions } from "../assets/mock-data";

export default class ReduxProvider extends React.Component{

    // It is created a constructor
    constructor(props){
        super(props);

        // State that allows
        this.initialState = {
            score: 0,           // Score while playing
            finished: false,    // WHen pressed submit to pick teh answer
            currentQuestion: 0,
            questions: [
                ...questions
            ]
        };
        this.store = this.configureStore();
        // It is given as store the combination of reducers
    }

    render() {
        return (
            <Provider store={this.store}>
                <div style={{ height: '100%'}}>
                    <App />
                </div>
            </Provider>
        )
    }

    configureStore(){
        return createStore(GlobalState, this.initialState);
    }

}