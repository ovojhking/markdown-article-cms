import React, { useState } from 'react';

const InputBase = (props) => {
	const [inputValue, setInputValue] = useState(props.defaultValue);

	const onValueChanged = (e) => {
		const nextInputValue = e.target.value;
		props.onValueChanged(nextInputValue);
		setInputValue(nextInputValue);
	}

	return (
		<input type="text" className={props.className} value={inputValue} placeholder={props.placeholder} onChange={(e)=>onValueChanged(e)} />
	);
}

InputBase.defaultProps = {
	defaultValue: '',
	placeholder: '請輸入文字',
	className: ''
};

export default InputBase;
