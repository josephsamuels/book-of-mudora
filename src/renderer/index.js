// Initial welcome page. Delete the following line to remove it.
'use strict';

// Load vendor packages.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Load application packages.
import './app.module';
import './app.styles.css';
import './main/main.component';

// Attach ng-app to HTML tag.
$('html').attr('ng-app', 'BookOfMudora');

// Replace #app with main component.
$('#app').replaceWith('<main></main>');
