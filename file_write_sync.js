var fileToWriteTo = require('fs');
var veggyTray = ['radish','lettuce','carp','potato'];
fileDes = fileToWriteTo.openSync('./veggie.txt','w');
while(veggyTray.length){
    console.log("hello world");
    veggie = veggyTray.pop() + " ";
    console.log(veggie);
    var numBytes = fileToWriteTo.writeSync(fileDes, veggie, null, null);
    console.log("Wrote %s %d bytes of dataz", veggie, numBytes);
}
var numBytes = fileToWriteTo.writeSync(fileDes, '\n', null, null);
fileToWriteTo.closeSync(fileDes);