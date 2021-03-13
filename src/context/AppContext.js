import React, { useReducer, createContext } from 'react';

const AppReducer = (state, action) => {
	switch(action.type) { 
		case 'ADD_EXPENSE':
			return { 
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return{
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'EDIT_BUDGET':
			return{
				...state,
				budget: action.payload,
			};
		default:
			return state;
	}
};

const initialState = {
	budget: 4000,
	criteria: "",
	expenses: [
		{ id: 12, name: 'Mortgage', cost: 1600 },
		{ id: 13, name: 'Utilities', cost: 300 },
		{ id: 14, name: 'Groceries', cost: 200 },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => { 
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return(
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);

};