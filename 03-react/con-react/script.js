import ReactDom from "https://esm.sh/react-dom@18.2.0/client"
// import ReactDom from 'react-dom/client'

const appDomElement = document.getElementById('app')

// creamos la raiz del arbol de react --> de la UI
const root  = ReactDom.createRoot(appDomElement)

root.render('Hola Mundo!')