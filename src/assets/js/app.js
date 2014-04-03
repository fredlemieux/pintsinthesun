/**
 * Config and app loader
 */
requirejs.config({
    'baseUrl': 'assets/js/lib',
    'paths': {
        'app': '../app',
        'slider': '../app/slider',
        'OSMBuildings': 'osmbuildings/OSMBuildings-Leaflet',
        'leaflet': 'http://cdn.leafletjs.com/leaflet-0.7/leaflet'
    },
    "shim": {
        'OSMBuildings': {
            exports: 'OSMBuildings',
            deps: ['leaflet']
        },
        'jquery': {
            exports: '$'
        },
        'jquery.event.move': ['jquery'],
        'underscore': {
            exports: '_'
        }
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);