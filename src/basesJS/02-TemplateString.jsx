
function TemplateString() {
    const nombre = 'Carlos';
    const apellido = 'Huite';

    //const nombreCompleto = nombre + ' ' + apellido;
    const nombreCompleto = `El nombre completo es: ${nombre} ${apellido}`;

    console.log(nombreCompleto);

    function getSaludo(name) {
        return `Hola ${name}`;
    }

    console.log(`Este es un texto: ${getSaludo("Chomin")}`);
}

export default TemplateString;