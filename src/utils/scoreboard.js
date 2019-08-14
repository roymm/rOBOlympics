import Tabletop from "tabletop";

const sheetId = "18mN2sOgJ2xywXhx0oYzFbeSsB9rok35eQQWHheokCDg";

export const getSpreadsheet = () => {
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

// TODO: Validar que el row venga de un juez autorizado
// TODO: Promediar las evaluaciones de cada juez por cada ronda
// TODO: Agregar un campo de Total de todas las rondas para cada equipo
// Basicamente, esta funcion no está aportando casi nada útil
export const getTotales = rows => {
  let equipos = {};
  Object.values(rows).forEach(row => {
    const { ronda, categoria } = row;
    const equipo = row["equipo" + categoria];
    let puntos = 0;
    switch (categoria) {
      case "Elementary":
        for (let i = 1; i <= 5; i++) {
          puntos += sacarPuntos(row["elementary0" + i]);
        }
        break;
      case "Junior":
        for (let i = 1; i <= 3; i++) {
          puntos += sacarPuntos(row["junior0" + i]);
        }
        break;
      case "Senior":
        for (let i = 1; i <= 5; i++) {
          puntos += sacarPuntos(row["senior0" + i]);
        }
        break;
      default:
        break;
    }
    if (!equipos[equipo]) equipos[equipo] = {};
    if (!equipos[equipo][ronda]) equipos[equipo][ronda] = 0;
    equipos[equipo][ronda] = puntos;
  });
  return equipos;
};

const sacarPuntos = value => {
  try {
    const number = parseInt(value.split("(")[1].split(" ")[0]);
    return isNaN(number) ? 0 : number;
  } catch (err) {
    return 0;
  }
};
