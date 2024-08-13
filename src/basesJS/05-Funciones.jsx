function Funciones() {


    const saludar = function(nombre) {
        return `Hola ${nombre}`;
    }

    const saludar2 = (nombre) => {
        return `Hola ${nombre}`;
    }

    const saludar3 = (nombre) => `Hola ${nombre}`;

    const getUser = () => {
        return {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
    }

    const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });
    
    console.log(saludar('Carlos'));
    console.log(saludar2('Carlos'));
    console.log(saludar3('Carlos'));
    console.log(getUser());
    console.log(getUser2());

    function getUsuarioActivo(nombre) {
        return {
            uid: 'ABC567',
            username: nombre
        }
    };

    const getUsuarioActivo2 = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    })

    const usuarioActivo = getUsuarioActivo('Carlos');
    console.log(usuarioActivo);

    console.log(getUsuarioActivo2('Carlos'));
}

export default Funciones;