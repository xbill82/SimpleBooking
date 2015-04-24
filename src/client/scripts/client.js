import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var state = {
  title: "Je viens!",
  user: {
    name: "Luca"
  }
};

var app;

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
  state: state
});

app.renderToDOM(attachElement);
