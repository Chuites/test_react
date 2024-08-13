function DesestructuracionObjetos() {
    const persona = {
        nombre: 'Tony',
        edad: 45,
        clave: 'Ironman'
    };

    const { nombre, edad, clave } = persona;

    console.log(nombre, edad, clave);

    const retornaPersona = (usuario) => {
        const { nombre, edad, clave } = usuario;
        console.log(nombre, edad, clave);
    }

    retornaPersona(persona);


    const retornaPersona2 = ({ clave, edad }) => {
        return {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
    }

    const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona2(persona);

    console.log(nombreClave, anios, lat, lng);
    
}

export default DesestructuracionObjetos;