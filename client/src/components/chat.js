import { useState } from 'react'
import ChatHeader from './chatHeader'
import ChatInput from './chatInput'
import ChatContainer from './containerContainer'
import ChatBody from './chatBody'

const Chat = ({ users, username, avatar }) => {
	const [ message, setMessage ] = useState('')

	const changeHandler = (evt) => {
		setMessage(evt.target.value)
	}

	return (
		<ChatContainer>
			<ChatHeader avatar={avatar} username={username} />
			<ChatBody users={users} />
			<ChatInput value={message} onChange={changeHandler} />
		</ChatContainer>
	)
}
export default Chat
