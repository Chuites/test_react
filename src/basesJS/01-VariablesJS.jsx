
function VariablesJS() {

  //Variables y Constantes
  console.log('************** Variables y Constantes **************');

  const nombre = 'Carlos';
  const apellido = 'Huite';
  let mensaje = 'Bienvenido a la clase de React: ';

  let dado = 6;

  console.log(mensaje + nombre, apellido);
  console.log('Valor del dado: ' + dado);

  if (!(dado == 4)) {
    let dado = 4;
    console.log('Valor del dado: ' + dado);
  }
  console.log('************** Variables y Constantes **************');

  return (
    <div>
      <h1>Variables y Constantes</h1>
    </div>
  )
}

export default VariablesJS
