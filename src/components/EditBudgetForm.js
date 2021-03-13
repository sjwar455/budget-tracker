import React, { useState, useContext }  from 'react';
import { AppContext } from '../context/AppContext';

const EditBudgetForm = () => { 
	const { dispatch } = useContext(AppContext);

	const [budget, setBudget] = useState('');

	const onSubmit = (event) => { 
		event.preventDefault();

		dispatch({
			type: 'EDIT_BUDGET',
			payload: parseInt(budget),
		});

	}; 

	return ( 
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>budget</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='budget'
						value={budget}
						onChange={(event) => setBudget(event.target.value)}
					></input>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Update Budget
					</button>
				</div>
			</div>
		</form>

	);
};

export default EditBudgetForm