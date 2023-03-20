import getOrganizador from './Organizador.js';

/**
 * Nuevo sitio para la organizador
**/

let mainTag = document.createElement('main');
let articuloTag = document.createElement('article');
articuloTag.appendChild(getOrganizador());
mainTag.appendChild(articuloTag);
document.body.insertAdjacentElement('afterbegin', mainTag);
