
const ChatHeader = ({ avatar, username }) => {

	return (
		<div className=''>
			<div className='px-4 py-2 flex gap-2 items-center border-b border-blue-500'>
				<img src={avatar} alt="" 
					className='w-12 h-12 rounded-full'
				/>
				<span>Loged in as </span>
				<span className='font-medium'>{username}</span>
			</div>
		</div>
	)
}
export default ChatHeader
