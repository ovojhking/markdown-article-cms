import React, { Component } from 'react';

function ValidatorHoc(WrappedComponent, validatorRuleList) {
	return class extends React.Component {
		static validate(value) {
			if (value === '') {
				return true;
			}
			return validatorRuleList.some(
				(rule) => value.match(rule),
			);
		}

		constructor(props) {
			super(props);
			this.state = {
				isValidated: true,
			};

			this.hijackOnValueChanged = this.hijackOnValueChanged.bind(this);
		}

		hijackOnValueChanged(value) {
			const { onValueChanged, validateStatus } = this.props;
			const isValidated = this.constructor.validate(value);
			if (isValidated) {
				onValueChanged(value);
			}
			validateStatus(isValidated);

			this.setState({ isValidated });
		}

		renderErrorMsg() {
			const { isValidated } = this.state;
			if (!isValidated) {
				return (
				<div className="position-absolute mt-sm-1 text-warning">{this.props.warning || '格式不正確'}</div>
				);
			}
			return '';
		}

		render() {
			return (
				<div className="position-relative">
					<WrappedComponent {...this.props} onValueChanged={this.hijackOnValueChanged} />
					{this.renderErrorMsg()}
				</div>
			);
		}
	};
}

export default ValidatorHoc;
