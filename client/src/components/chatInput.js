
const ChatInput = ({ value, onChange }) => {
	return (
		<div className=''>
			<input 
				value={value} 
				onChange={onChange} 
				placeholder='your message'
				className='border border-slate-300 mt-auto'
			/>
		</div>
	)
}
export default ChatInput
