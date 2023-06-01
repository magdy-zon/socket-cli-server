const {io} = require('socket.io-client');

// Client
async function execSocketClient() {
  socket = io(`http://127.0.0.1:3040`, {
    forceNew: true,
    reconnection: true,
    reconnectionAttempts: 2,
    rejectUnauthorized: false,
    transports: ['websocket'],
    agent: false,
    upgrade: false
  });

  
  socket.on('connect', () => {
    console.log(socket);
    console.log('-----')
  })

  socket.on('disconnect', () => {
    console.log('server was disconnected')
  })

  socket.on('timeslot_selected', (data) => { 
    console.log('LO LOGRAMOS');
  });

  socket.on("connect", () => {
    // console.log('-----')
    // console.log(socket)
  });
  
  await socket.emit('calendarVisit', {
    nameRoom: 'Room-26-05-2023-5dcf5e5b4a706746d5df0341'
  }, () => {
    console.log('joined');
  });

  // setTimeout(saludos, 3000, "Nathan", "Programador");

  await socket.emit('calendarVisit-notification', {
    nameRoom: `Room-26-05-2023-5dcf5e5b4a706746d5df0341`,
    event: 'timeslot_selected',
    slot: {
        datetime: '2022-12-01T18:00:00.000Z',
        idBroker: '5dcf5e5b4a706746d5df0341'
    },
  }, () => {
    console.log('schedule update event successfull');
  }); 
}

execSocketClient();
