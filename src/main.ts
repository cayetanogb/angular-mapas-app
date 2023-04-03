import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiY2F5ZXRhbm9nYjIyIiwiYSI6ImNsZHI1ZWlvaTAxN2wzcHBpd3d0N2h0N2oifQ.1onYeAlb6_71DKQfn2pnMQ';

if (!navigator.geolocation) {
  alert("Navegador no soporta la Geolocation");
  throw new Error("Navegador no soporta la Geolocation");
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
