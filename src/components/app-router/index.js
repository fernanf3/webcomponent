import { CubisElement, html } from '../../utils/index.js';

class AppRouter extends CubisElement
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
      <h1>Router</h1>
    `;
  }

}

window.customElements.define('app-router', AppRouter);