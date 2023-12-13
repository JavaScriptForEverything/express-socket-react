const { randomUUID } = require('crypto')
const { createServer } = require('http')
const { Server } = require('socket.io')

const httpServer = createServer()
const io = new Server( httpServer, { cors: { origin: '*' } })

const PORT = process.env.PORT || 5000
httpServer.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))


/* We can authenticate in 2 ways:
		1. From current connection 	: User must provide credentials before connect
		2. By seperate slice 				: User can send credentials after connect and can by secure any slice seperately
*/ 
io.use((socket, next) => {
	const username = socket.handshake.auth.username 	// socket.auth = { username: 'loginInUserName' }
	if( !username ) return next(new Error('Username not found'))

	socket.username = username
	socket.userId = randomUUID()

	next()
})

io.on('connection', (socket) => {
	const users = []

	io.of('/').sockets.forEach( ( socket ) => {
		users.push({
			id: socket.id,
			userId: socket.userId,
			username: socket.username,
			time: socket.time
		})
	})

	socket.emit('users', users)

	socket.emit('session', { 
		userId: socket.userId,
		username: socket.username,
	})
})
