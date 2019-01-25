import { html, htmlLiteral } from './html.js';

class CubisElement extends HTMLElement 
{
  constructor() 
  {
    super();

    this.templates = this.constructor.templates;

    if (!this.templates instanceof HTMLTemplateElement)
      console.error("Not declaraded function templates on class parent.");

    const templates = this.templates.content;
    
    this.root = this.attachShadow({mode: 'open'})
                    .appendChild(templates.cloneNode(true));
  }

};

export {
  CubisElement,
  html,
  htmlLiteral
};