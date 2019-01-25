import { CubisElement, html } from '../../utils/index.js';

class AppDrawer extends CubisElement 
{
  constructor() 
  {
    super();
  }

  static get templates() 
  {
    return html`
      <style>
      </style>
      <h1>Drawer</h1>
    `;
  };

};

window.customElements.define('app-drawer', AppDrawer);