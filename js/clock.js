export function clock() {
  /*
  D = Día
  MMMM = Mes
  YYYY = Año
  H:mm:ss = Hora:minutos:segundos formaro 24 horas
  h:mm:ss = Hora:minutos:segundos formato 12 horas
  a = Am o Pm */

  setInterval(() => {
    // Variables

    // Día
    const days = moment().format(`dddd D`);
    // meses
    const months = moment().format(`MMMM`);
    // Años
    const years = moment().format(`YYYY`);
    // Establecer formato de la fecha y hora
    moment.locale("es");

    /* ========== Agregando al DOM ==========*/
    // Fecha
    document.querySelector(
      "#date"
    ).textContent = `${days} de ${months} del ${years}`;
    // Hora
    document.querySelector("#hours").textContent = moment().format("h:mm");
    // Segundos
    document.querySelector("#seconds").textContent = moment().format("ss");
    // AM o PM
    document.querySelector("#am-pm").textContent = moment().format("a");
  }, 1000); // se ejecuta cada segundo
}
