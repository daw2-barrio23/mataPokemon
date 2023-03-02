// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import {home} from "./vistas/home";
import {header} from "./componentes/header"
import {footer} from "./componentes/footer"


document.querySelector('header').innerHTML = header.template;
header.script()
document.querySelector('main').innerHTML = home.template;
home.script()
document.querySelector('footer').innerHTML = footer.template;
footer.script()

