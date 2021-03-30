import axios from 'axios'

export default axios.create({
	baseURL: 'https://rect-quiz-42d5c-default-rtdb.firebaseio.com/'
})