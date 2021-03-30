// import * as classes from './Button.css'
import './Button.css'

const Button = props => {
	const cls = [
		'Button',
		[props.type],
		// classes.Button,
		// classes[props.type]
	]

	return (
		<button
			onClick={props.onClick}
			className={cls.join(' ')}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}


export default Button