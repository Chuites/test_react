
import { createRoot } from 'react-dom/client'
import VariablesJS from './basesJS/01-VariablesJS.jsx'
import TemplateString from './basesJS/02-TemplateString.jsx'
import ObjetosLiterales from './basesJS/03-ObjetosLiterales.jsx'
import Arreglos from './basesJS/04-Arreglos.jsx'
import Funciones from './basesJS/05-Funciones.jsx'
import DesestructuracionObjetos from './basesJS/06-DesestructuracionObjetos.jsx'
import DesestructuracionArreglos from './basesJS/07-DesestructuracionArreglos.jsx'
import FuncionesArreglos from './basesJS/08-FuncionesArreglos.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <VariablesJS />
    <TemplateString />
    <ObjetosLiterales />
    <Arreglos />
    <Funciones />
    <DesestructuracionObjetos />
    <DesestructuracionArreglos />
    <FuncionesArreglos />
  </div>
)
