const ChatContainer = ({ children }) => {
	return (
		<div className='flex flex-col container mx-auto min-h-screen border border-slate-300'>
			{children}
		</div>
	)
}
export default ChatContainer
