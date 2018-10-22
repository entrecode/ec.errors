const fs = require('fs');
const errorCodes = require('./errorCodes.json');

let text = `
# Error Codes
| code | message | message (de) | status |
|---|---|---|---|`;

Object.entries(errorCodes).forEach(([code, { message, messageDE, status }]) => {
  text += `
| ${code} | ${message} | ${messageDE} | ${status} |`;
});

fs.writeFile('./errorCodes.md', text, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('generated errorCodes.md');
  }
});
