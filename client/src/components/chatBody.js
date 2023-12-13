
const ChatBody = ({ users }) => {

	return (
		<div className='flex-1'>
			<pre>
				{JSON.stringify(users, null, 2)}
			</pre>
		</div>
	)
}
export default ChatBody
