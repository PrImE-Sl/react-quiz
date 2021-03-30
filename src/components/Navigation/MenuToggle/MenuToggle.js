
import './MenuToggle.css'
import React from 'react'

const MenuToggle = props => {
	const cls = [
		'MenuToggle',
		// classes.MenuToggle,
		'fa',
	]

	if (props.isOpen) {
		cls.push('fa-times')
		// cls.push(classes.open)
		cls.push('open')
	} else {
		cls.push('fa-bars')
	}

	return (
		<i className={cls.join(' ')}
			onClick={props.onToggle}>
		</i>
	)
}


export default MenuToggle