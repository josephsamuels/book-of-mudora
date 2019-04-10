// Load vendor packages.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Load application packages.
import './app';

// Attach ng-app to HTML tag.
$('html').attr('ng-app', 'app');

// Replace #app with main component.
$('#app').replaceWith('<main></main>');
