import { Actions } from 'react-native-router-flux';
import {
    TODO_UPDATE,
    TODO_CREATE,
    TODOS_FETCH_SUCCESS,
    TODO_SAVE_SUCCESS,
    TODO_CLEAR
} from './types';

const ServerAddress = "http://localhost:8080"; // TODO: DRY

export const todoUpdate = ({ prop, value }) => {
    return {
        type: TODO_UPDATE,
        payload: { prop, value }
    };
};

export const todoCreate = ({ name, done }) => {
    // const { currentUser } = firebase.auth();

    // return a 'pretend' function to satisfy redux-thunk
    return (dispatch) => {
        // firebase.database().ref(`/users/${currentUser.uid}/todos`)
        //     .push({ name, phone, shift})
        //     .then(() => {
        //         dispatch({ type: TODO_CREATE });
        //         Actions.pop();
        //     });
    }
};

export const todosFetch = () => {

    return (dispatch) => {
        return fetch(`${ServerAddress}/api/todos/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (!response.ok) {
                throw response;
            }
            return response.json();
        })
        .then(responseJson => {
            console.log("SUCCESS!");
            dispatch({ type: TODOS_FETCH_SUCCESS, payload: responseJson })
        })
        .catch(error => {
            console.log("ERROR!");
            error.json()
                .then(errorJson => {
                    console.log(errorJson);
                })
        });
    }
};

export const todoSave = ({ name, done, uid }) => {
    // const { currentUser } = firebase.auth();

    return (dispatch) => {
        // firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
        //     .set({ name, phone, shift })
        //     .then(() => {
        //         dispatch({ type: TODO_SAVE_SUCCESS });
        //         Actions.pop();
        //     });
    }
};

export const todoClear = () => {
    return ({ type: TODO_CLEAR });
};

export const todoDelete = ({ uid }) => {
    // const { currentUser } = firebase.auth();

    return (dispatch) => {
        // firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
        //     .remove()
        //     .then(() => {
        //         dispatch({ type: TODO_CLEAR });
        //         Actions.pop();
        //     });
    }
};