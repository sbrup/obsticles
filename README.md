# obsticles
## Simple obs and tmi interface to change images in a source and hue shift it

- The commands are as follows:
  - Image file name: The file name of an image (including spaces) becomes a command, and when called, the image source updates accordingly
  - 'hue(number)' and 'h(number)': These commands change the hue of the currently displayed image, which in OBS can be varied from -180 to 180. 'h(number)' is a simpler way to call the command.

### You'll need:
- Basic install of LTS Node.js 18.16.0 (https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi)
- A dedicated phone and email verified twitch account for the bot
- Install of OBS with v5 websocket plugin

### Set up

- After making the bot account, verify it's phone number and email.
- Go to https://twitchapps.com/tmi, sign in and authorize the service
- Note the OAuth token generated, keep it private

- In OBS, navigate to 'Tools', click 'WebSocket Server Settings'
- In the 'Plugin Settings' section, tick 'Enable WebSocket Server'
- In the 'Server Settings' section, tick 'Enable Authentication' and generate a password
- Apply the changes and hit 'OK'

- You now have all the credentials necessary to use the bot

- Download the obsticles.js file from this repo, and put it in a folder
- Open the file in a text editor
- In line 7, put the bot's username
- In line 8 put the OAuth token you got earlier beside the 'oath:'
- In OBS, navigate to 'Tools', click 'WebSocket Server Settings'
- In the 'Server Settings' section, click on show 'Connect Info'
- In line 25, replace the IP address, port and password with those in the 'Connect Info' pane

- Open the node.js command prompt
- Navigate to the folder you put the JS file in
- Enter `npm install tmi.js` and `npm install obs-websocket-js` to install the libraries

### How to use

-Put the .jpgs you would like to use in a folder, and copy it's path
-Put the path in line 34
-For all the images in the folder, enter the exact file name excluding the .jpg descriptor in the command variables
-Put the names of the image source, and hue filter you are applying to it in the input and filter name parameters (use CTRL + F to find each)

- Now to run the bot, open the node.js command prompt and navigate to the directory containing the JS file
- Host it by entering `node obsticles.js`
- The APIs should connect, and you can use the commands.


