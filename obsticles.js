const tmi = require('tmi.js');
const { default: OBSWebSocket } = require('obs-websocket-js');
const obs = new OBSWebSocket();
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'BOT_USERNAME', //username of bot
		password: 'oauth:TOKEN_GOES_HERE' // oauth token of bot account
	},
	channels: [ 'YOUR_CHANNEL_NAME' ] //your channel name goes in here
});
obs.on('ConnectionOpened', () => {
  console.log('Connection Opened');
});
obs.on('Identified', () => {
	console.log('Identified')

  // Send some requests.
  obs.call('GetSceneList').then((data) => {
    console.log('Scenes:', data);
  });
  
});
//       \/just example ip and port\/
obs.connect('ws://192.168.0.1:4455' , 'password').then((info) => { // replace with your ip, port, and password
	console.log('Connected and identified', info)
}, () => {
	console.error('Error Connecting')
});

function setInputSettings(inputName, fileName) {
  //Replace this var with the path to the folder with your images 
  //(they must be .jpg, might add support for other formats later)
  const filePath = `C:\\${fileName}.jpg`; // '${fileName}.jpg' this part is necessary

  obs.call('GetInputSettings', {
    inputName: inputName,
  })
    .then(() => {
      obs.call('SetInputSettings', {
        inputName: inputName,
        inputSettings: {
          file: filePath
        }
      });
    })
    .catch((err) => {
      console.error('Failed to send command to OBS Studio:', err);
    });
}

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;
	const command = message.toLowerCase();
	if (command === '' || 
		command === '' || 
		command === ''
		//command === '' ||
		//... follow this format to add more commands/images
		//command === '' ||
		//command === '' ||
		//command === '' ||
		//command === '' ||
		//command === '' ||
		//command === '' ||
		//command === '')
		) {
	  setInputSettings('SOURCE_NAME', command);
	}
		
	if (message.toLowerCase().startsWith('h')) {
	  const hueValue = parseInt(message.substring(1));
	  if (!isNaN(hueValue) && message.length > 1) {
		obs.call('SetSourceFilterSettings', {
		  sourceName: 'SOURCE_NAME',
		  filterName: 'hue',
		  filterSettings: {
			hue_shift: hueValue,
		  },
		  overlay: false,
		}).then((data) => {
		  console.log('Success:', data);
		}).catch((err) => {
		  console.log('Error:', err);
		});
	  } else {
		console.log('Invalid hue value. Please provide a number.');
	  }
	}

	if (message.toLowerCase().startsWith('hue')) {
	  const hueValue = parseInt(message.substring(3));
	  if (!isNaN(hueValue) && message.length > 3) {
		obs.call('SetSourceFilterSettings', {
		  sourceName: 'SOURCE_NAME',
		  filterName: 'hue',
		  filterSettings: {
			hue_shift: hueValue,
		  },
		  overlay: false,
		}).then((data) => {
		  console.log('Success:', data);
		}).catch((err) => {
		  console.log('Error:', err);
		});
	  } else {
		console.log('Invalid hue value. Please provide a number.');
	  }
	}
	
});

		
		
