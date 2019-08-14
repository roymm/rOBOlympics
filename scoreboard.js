const gsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

const getInfo = async () => {
  const doc = new gsheet('18mN2sOgJ2xywXhx0oYzFbeSsB9rok35eQQWHheokCDg');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
  const rows = await promisify(sheet.getRows)({
    offset: 1
  });

  let equipos = {};

  rows.forEach(row => {
    const { ronda, categoria } = row;
    const equipo = row['equipo' + categoria.toLowerCase()];
    let puntos = 0;
    switch (categoria) {
      case 'Elementary':
        for (var i = 1; i <= 5; i++) {
          puntos += sacarPuntos(row['elementary0' + i]);
        }
        break;
      case 'Junior':
        for (i = 1; i <= 3; i++) {
          puntos += sacarPuntos(row['junior0' + i]);
        }
        break;
      case 'Senior':
        for (i = 1; i <= 5; i++) {
          puntos += sacarPuntos(row['senior0' + i]);
        }
        break;
      default:
        break;
    }
    if (!equipos[equipo]) equipos[equipo] = {};
    if (!equipos[equipo][ronda]) equipos[equipo][ronda] = {};
    equipos[equipo][ronda] = puntos;
  });
  console.log(equipos);
  return equipos;
};

const sacarPuntos = value => {
  try {
    const number = parseInt(value.split('(')[1].split(' ')[0]);
    return isNaN(number) ? 0 : number;
  } catch (err) {
    return 0;
  }
};

getInfo();
