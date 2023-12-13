import { io } from 'socket.io-client'
import Main from './components/main'

const socket = io('http://localhost:5000')

const App = () => {


	return (
		<Main socket={socket} />
	)
}
export default App
