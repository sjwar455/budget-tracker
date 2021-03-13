import React, { useState }  from 'react';

const EditBudget = (props) => {
	const [amount, setAmount] = useState(props.budget);

	return(
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='amount'
				value={amount}
				onChange={(event) => setAmount(event.target.value)}
			/>

			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(amount)}
			
			>
				Update
			</button>
		</>
	);
};

export default EditBudget;