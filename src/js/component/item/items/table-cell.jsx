import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { pick } from '../../../common/immutable';

const Cell = props => {
	const { children, className, columnName, index, width } = props;

	return (
		<div
			data-colindex={ index }
			aria-colindex={ index }
			className={ cx('metadata', columnName, className) }
			data-column-name={ columnName }
			style={ { width } }
			{ ...pick(props, ['onClick', 'onKeyDown', 'tabIndex']) }
			{ ...pick(props, key => key.match(/^(aria-|data-).*/)) }
		>
			{ children }
		</div>
	)
}

Cell.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
	className: PropTypes.string,
	columnName: PropTypes.string,
	index: PropTypes.number,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Cell;