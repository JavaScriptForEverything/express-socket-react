
const Login = ({ newUser, onChange, onSubmit }) => {

	return (
		<form onSubmit={onSubmit} className='max-w-sm mx-auto mt-10'>
			<h2>Enter Your username</h2>
			<input onChange={onChange} value={newUser} type="text"  autoFocus={true}
				className='border border-slate-300 block'
			/>
			<button 
				className='border border-blue-500 px-2 py-1 rounded text-blue-600'
			>Login</button>
		</form>
	)
}
export default Login