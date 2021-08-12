/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Your access token can be found at: https://cesium.com/ion/tokens.\n// This is the default access token from your ion account\n\nCesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';\n\n// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.\nconst viewer = new Cesium.Viewer('cesiumContainer', {\n  terrainProvider: Cesium.createWorldTerrain()\n});    \n// Add Cesium OSM Buildings, a global 3D buildings layer.\nconst buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   \n// Fly the camera to San Francisco at the given longitude, latitude, and height.\nviewer.camera.flyTo({\n  destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),\n  orientation : {\n    heading : Cesium.Math.toRadians(0.0),\n    pitch : Cesium.Math.toRadians(-15.0),\n  }\n});\n\n//# sourceURL=webpack://cesiumjs-webpack-tutorial/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;