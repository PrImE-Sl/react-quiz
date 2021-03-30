// import * as classes from './AnswerItem.css'
import './AnswerItem.css'

// const AnswerItem = props => {
// 	const cls = [classes.AnswerItem]

// 	if (props.state) {
// 		cls.push(classes[props.state])
// 	}

// 	return (
// 		<li
// 			className={cls.join(' ')}
// 			onClick={() => props.onAnswerClick(props.answer.id)}
// 		>
// 			{ props.answer.text}
// 		</li>
// 	)
// }

const AnswerItem = props => {
	const cls = ['AnswerItem']

	if (props.state) {
		cls.push([props.state])
	}
	return (
		<li className={cls.join(' ')}
			onClick={() => props.onAnswerClick(props.answer.id)}>
			{props.answer.text}
		</li>
	)
}

export default AnswerItem