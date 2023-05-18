# obsticles
## simple obs and tmi interface to change images in a source and hue shift it

- The commands are as follows:
- image file name: The file name of an image (including spaces) becomes a command, and when called, the image source updates accordingly
- 'hue(number)' and 'h(number)': These commands change the hue of the currently displayed image, which in OBS can be varied from -180 to 180. 'h(number) is a simpler way to call the command.

###You'll need:
- Install of Node.js 
- A dedicated phone and email verified twitch account for the bot
- Install of OBS with v5 websocket plugin (if you have latest, that is right)

###set up

- After making the bot account, verify it's phone number and email.
- Go to https://twitchapps.com/tmi and sign in, authorize the service
- Note the OAuth token, keep it private

- In OBS, navigate to 'Tools', click 'WebSocket Server Settings'
- In the 'Plugin Settings' section, tick 'Enable WebSocket Server'
- In the 'Server Settings' section, tick 'Enable Authentication' and generate a password
- Apply the changes and hit 'OK'

- You now have all the credentials necessary to use the bot

- download the obsticles.js file from this repo, and put it in a folder
- open the file in a text editor
- In line 7, put the bot's username
- in line 8 put the OAuth token you got earlier beside the 'oath:'
- In OBS, navigate to 'Tools', click 'WebSocket Server Settings'
- In the 'Server Settings' section, click on show 'Connect Info'
- In line 25, replace the ip, port and password with those in the 'Connect Info' pane

- open the node.js command prompt
- navigate to the folder you put the JS file in
- enter `npm install tmi.js` and `npm install obs-websocket-js` to install the libraries

###how to use

-Put the .jpgs you would like to use in a folder, and copy it's path
-Put the path in line 34
-For all the images in the folder, enter the exact file name excluding the .jpg descriptor in the command variables
- kxfdjghsda;ijgsdkjfhg;sdjfgh;kjfdg;khdsguiotrhyosd;fng

- Now to run the bot, open the node.js command prompt and navigate to the directory containing the JS file
- Host it by entering `node obsticles.js`
- The APIs should connect, and you can use the commands.


