import Tabletop from 'tabletop';

const sheetForm = '18mN2sOgJ2xywXhx0oYzFbeSsB9rok35eQQWHheokCDg';
const sheetCorreos = '1gXX_7SrtsZ_ZQUabEGSn-j5EgwIWI_BkQfXjAsaZi4A';

export const getForm = () => {
  return getSpreadsheet(sheetForm);
};

const getSpreadsheet = sheetId => {
  return new Promise(resolve => {
    Tabletop.init({
      key: sheetId,
      callback: googleData => {
        resolve(googleData);
      },
      simpleSheet: true
    });
  });
};

// TODO: Agregar un campo de Total de todas las rondas para cada equipo
// Basicamente, esta funcion no está aportando casi nada útil
export const getTotales = rows => {
  let totales = {};
  return new Promise(resolve => {
    getSpreadsheet(sheetCorreos).then(dataCorreos => {
      const correos = Object.values(dataCorreos).map(value => value['Correo']);
      Object.values(rows).forEach(row => {
        const { ronda, categoria, email } = row;
        const equipo = row['equipo' + categoria];

        // Si el correo no esta en la lista, ignora este row
        if (!correos.includes(email)) return;

        // Inicializar campos
        if (!totales[categoria]) totales[categoria] = {};
        if (!totales[categoria][equipo]) totales[categoria][equipo] = {};
        if (!totales[categoria][equipo][ronda])
          totales[categoria][equipo][ronda] = 0;

        // Iterar por los fields de este row buscando las respuestas y sumando
        switch (categoria) {
          case 'Elementary':
            for (let i = 1; i <= 5; i++) {
              totales[categoria][equipo][ronda] += sacarPuntos(
                row['elementary0' + i]
              );
            }
            break;
          case 'Junior':
            for (let i = 1; i <= 3; i++) {
              totales[categoria][equipo][ronda] += sacarPuntos(
                row['elementary0' + i]
              );
            }
            break;
          case 'Senior':
            for (let i = 1; i <= 5; i++) {
              totales[categoria][equipo][ronda] += sacarPuntos(
                row['elementary0' + i]
              );
            }
            break;
          default:
            break;
        }
      });
      resolve(totales);
    });
  });
};

const sacarPuntos = value => {
  try {
    const number = parseInt(value.split('[')[1].split(' ')[0]);
    return isNaN(number) ? 0 : number;
  } catch (err) {
    return 0;
  }
};
