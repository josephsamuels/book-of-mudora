// Initial welcome page. Delete the following line to remove it.
'use strict';

// Load vendor packages.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Load application packages.
import './app.module';
import './app.styles.css';

$('html').attr('ng-app', 'BookOfMudora');
$('#app').replaceWith('<nav class="navbar navbar-light bg-light"><a class="navbar-brand" href="#">Hi</a></div>');
