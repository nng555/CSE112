# CSE112

<b>Setup Instructions</b>
1. Git clone the repository onto the local machine.
2. Install npm and Node.js.
3. Change directory to "myapp" and run "npm install".
4. If developing on Windows, set ""scripts" : { "start": " in package.json to "SET NODE_ENV=dev & node ./bin/www".
5. Run "npm start".
6. Open "localhost:3000" in a browser to see the app.

<b>Vagrant Instructions</b>
1. Install Vagrant.
2. Change directory to root project directory and run "vagrant up".
3. If "Vagrant cannot forward the specified ports on this VM" is shown, open the Vagrantfile and change the host to some other port.
4. When the error continues, cry.
