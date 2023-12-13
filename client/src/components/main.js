import { useEffect, useState } from 'react'
import Login from './login'
import Chat from './chat'

const Main = ({ socket }) => {
	const [ newUser, setNewUser ] = useState('')
	const [ user, setUser ] = useState('')
	const [ users, setUsers ] = useState([])

	useEffect(() => {
		socket.on('session', ({ userId, username }) => {
			setUser( username )
		})

		socket.on('users', (getUsers) => {
			setUsers(getUsers)
		})
	}, [socket, users])


	const inputChangeHandler = (evt) => {
		setNewUser(evt.target.value)
	}

	const submitHandler = (evt) => {
		evt.preventDefault()
		socket.auth = { username: newUser }
		socket.connect()
	}

	return (
		<>
		{ user ? (
			<Chat 
				username={user}
				avatar={'/logo.png'}
				users={users}
			/>
		): (
			<Login 
				newUser={newUser}
				onChange={inputChangeHandler}
				onSubmit={submitHandler}
			/>
		)}
		</>
	)
}
export default Main

