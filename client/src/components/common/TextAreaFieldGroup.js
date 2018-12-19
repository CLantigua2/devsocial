import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

const TextAreaFieldGroup = ({ name, placeholder, value, error, info, handleChange }) => {
	return (
		<div className="form-group">
			<textarea
				className={classnames('form-control form-control-lg', {
					'is-invalid': error
				})}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChange}
			/>
			{info && <small className="form-text text-muted">{info}</small>}
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

TextAreaFieldGroup.protoTypes = {
	name: propTypes.string.isRequired,
	placeholder: propTypes.string,
	value: propTypes.string.isRequired,
	info: propTypes.string,
	error: propTypes.string,
	handleChange: propTypes.func.isRequired
};

export default TextAreaFieldGroup;