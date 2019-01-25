import { CubisElement, html } from '../../utils/index.js';

class AppFooter extends CubisElement 
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
      <h1>Footer</h1>
    `;
  }

};

window.customElements.define('app-footer', AppFooter);