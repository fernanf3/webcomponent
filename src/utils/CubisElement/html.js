class LiteralString {
  constructor(string) {
    /** @type {string} */
    this.value = string.toString();
  }
  /**
   * @return {string} LiretalString string value 
   */
    toString() {
      return this.value;
    }
}

/**
 * 
 * @param {*} value Object to stringify into HTML 
 * @return {string} HTML stringified form of `obj`  
 */

function literalValue(value) {
  if (value instanceof LiteralString)
    return /** @type {!LiteralString} */(value).value;
  else
    throw new Error(
      `non-template value passed to CubisElement htmlLiteral function: ${value}`);
}

/**
 * 
 * @param {*} value Object to stringify into HTML 
 * @return {string} HTML stringified form of `obj`  
 */
function htmlValue(value) {
  console.log(value)
  if (value instanceof HTMLTemplateElement)
    return /** @type {!HTMLTemplateElement} */(value).innerHTML;
  else if (value instanceof LiteralString)
    return literalValue(value);
  else 
    throw new Error(
      `non-template value passed to CubisElement html function: ${value}`);
}

/**
 * A template literal tag that creates an HTML <template> element from the
 * contents of the string.
 * 
 * Example:
 * 
 *    static get templates() {
 *      return html`
 *        <style>:host { content: "..." }</style>
 *        <div class="shadowed">${this.partialTemplate}</div>
 *        ${super.template}
 *       `;
 *    }
 *    static get partialTemplate() { return html`<span>Partial!</span>`; }
 * 
 * @param {!ITemplateArray} strings Constant parts of tagged template literal
 * @param  {...*} values Variable parts of tagged template literal
 * @return {!HTMLTemplateElement} Constructor HTMLTemplateElement 
 */

export const html = function html(strings, ...values) {
  const template = /** @type {!HTMLTemplateElement} */ (document.createElement('template'));
  template.innerHTML = values.reduce((acc, v, idx) => 
    acc + htmlValue(v) + strings[idx + 1], strings[0]);
  return template;
};

/**
 * An html literal tag that can be used with `html` to compose.
 * a literal string.
 *
 * Example:
 *
 *     static get template() {
 *       return html`
 *         <style>
 *           :host { display: block; }
 *           ${this.styleTemplate()}
 *         </style>
 *         <div class="shadowed">${staticValue}</div>
 *         ${super.template}
 *       `;
 *     }
 *     static get styleTemplate() {
 *        return htmlLiteral`.shadowed { background: gray; }`;
 *     }
 *
 * @param {!ITemplateArray} strings Constant parts of tagged template literal
 * @param {...*} values Variable parts of tagged template literal
 * @return {!LiteralString} Constructed literal string
 */

export const htmlLiteral = function(strings, ...values) {
  return new LiteralString(values.reduce((acc, v, idx) => 
    acc + literalValue(v) + strings[idx + 1], strings[0]));
};

