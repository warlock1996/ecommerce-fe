import React, { useState } from 'react'

function Radio({ value, label, onChange, labelProps = {}, ...props }) {
	return (
		<div>
			<input id='radio' type='radio' checked={value} onChange={(e) => onChange(e.target.checked)} {...props} />
			<label htmlFor='radio' {...labelProps}>
				{label}
			</label>
		</div>
	)
}

function RadioGroup({ value, onChange, name, children, ...props }) {
	return (
		<div {...props}>
			{React.Children.map(children, (child, index) => {
				return React.cloneElement(child, {
					onChange: () => onChange(index),
					checked: value === index,
					key: index,
					name,
                    id: index,
                    labelProps: { htmlFor: index},
					...child.props,
				})
			})}
		</div>
	)
}

export { Radio, RadioGroup }
