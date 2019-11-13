function day_js()
{
    const nombresDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let fecha = new Date();
    let parseado = 
    {
        dayName : nombresDias[fecha.getDay()], // string
        dayNumber : fecha.getDate(), // int
        month : nombresMeses[fecha.getMonth()]
    };
    return parseado;
}