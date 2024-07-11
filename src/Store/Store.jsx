import React, { createContext, useReducer, useContext } from 'react';

const reducer = (state, action) => {

    console.log(state, action)
    switch (action.type) {
        case 'set_menu':
            return {state: action.payload};
            // return {
            //     ...state,
            //     action.payload
            // }
        default:
            return state
    }
}

const Context = createContext('');
const useStore = () => useContext(Context);


const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, null);
    return (
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    );
}

export { useStore, StoreProvider };