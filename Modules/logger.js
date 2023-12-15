const fs = require('fs/promises');
const path = require('path');


logThis = async (logText, fromApi) => {
    const filePath = path.join(__dirname, '../logs/logs_data.txt');
    let datetime = new Date();
    let currentDateTime = datetime.toLocaleString('en-US');


    const start = `_______________________________________________________________Headers - ${fromApi} - ${currentDateTime}________________________________________________________________`;
    const end = "__________________________________________________________________________________________________________________________________________________________________";


    fs.appendFile(filePath, "\n \n" + start + "\n" + logText + "\n" + end,(err) => {
      if (err) {
        console.error('Error appending to file:', err);
      } else {
        console.log('Data has been appended to the file successfully!');
      }
    });

    console.log(start)
    console.log(logText);
    console.log(end)
}

module.exports = logThis;