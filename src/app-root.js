import { CubisElement, html } from './utils/index.js';

import './components/app-header/index.js';
import './components/app-footer/index.js';
import './components/app-drawer/index.js';
import './components/app-router/index.js';


class AppRoot extends CubisElement 
{
    
  constructor() 
  {
    super();
    
    this.message = "Hello"
  };

  static get templates() 
  {
    return html`
      <style>
        :host {
          position: relative; 
          display: block;
          box-sizing: boder-box;
          width: 100%;
          height: 100%;
        }
      </style>
      <app-header text="Hola"></app-header>
      <app-drawer></app-drawer>
      <app-router></app-router>
      <app-footer></app-footer>
    `;
  }

};

window.customElements.define('app-root', AppRoot);