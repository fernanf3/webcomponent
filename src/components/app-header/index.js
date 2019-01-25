import { CubisElement, html } from '../../utils/CubisElement/index.js';

class AppHeader extends CubisElement 
{
  constructor() 
  {
    super();

  };

  static get templates() 
  {
    return html`
      <style>
        :root {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      </style>
      <button class="btn-menu">
        <span ></span>
        <span></span>
        <span></span>
      </button>
      <h3 class="title">Plataform Ecommerce</h3>
      <div class="group-btn">

      </div>
    `;
  };

  static get observedAttributes() {
    return ['text'];
  }

};

window.customElements.define('app-header', AppHeader);