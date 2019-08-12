const gsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

async function accessSpreadsheet(){
    const doc = new gsheet('18mN2sOgJ2xywXhx0oYzFbeSsB9rok35eQQWHheokCDg');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`)

}

accessSpreadsheet();
