// trying to use camel case for class names and making it usnique
class ADRandomQuotes extends HTMLElement {
  constructor() {
    super() 
    // private variables
    this._quotes = [
      "Don't let someone's bad mood swing you their direction",
      "I'm not a crowd blender. i just go where the truth is told",
      "One thing i've learned in life, is that women can't make up their minds what they want"
    ];

    // creating the DOM element 
    this._$quotes = null;
    this._interval = null;
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
            .rw-container {
                width: 500px;
                margin: auto;
                border: dotted 1px #999;
                padding: 20px;
            }
            .rw-container h1 {
                font-size: 20px;
                margin: 0;
            }
        </style>
        <div class="rw-container">
            <h1>Random Quote:</h1>
            <p>"<span id="quote"></span>"</p>
        </div>
    `;

    this._$quotes = this.querySelector('#quote');
    this._interval = setInterval( () => this._render(), 10000);
    this._render();
  }

  _render() {
    if(this._$quotes != null) {
      this._$quotes.innerHTML = this._quotes[Math.floor(Math.random() * this._quotes.length )];
    }
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }
} 

// register the component 
window.customElements.define('ad-random-quotes', ADRandomQuotes);