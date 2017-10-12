// This action handles a token returned from the server upon successful login.

// Action Creator - the entire function, returns action object.
export const redirectAction = (redirection) => {
    // Action - contains a type and a payload. type is an identifier.
    return {
        // This type is read in tokenReducer.js
        type: 'REDIRECT_DATA',
        // payload is information given to the app to be conveyed to state.
        payload: redirection
    }
};
