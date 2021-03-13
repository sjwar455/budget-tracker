import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const SearchExpensesForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [criteria, setCriteria] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: 'SEARCH_EXPENSES',
			payload: criteria,
		});
	};

	return ( 
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Search Expenses</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='criteria'
						value={criteria}
						onChange={(event) => setCriteria(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Search
					</button>
				</div>
			</div>
		</form>

	);

}

export default SearchExpensesForm