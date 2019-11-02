"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var cors = require("cors");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
    }
    App.prototype.setUpMiddlewares = function () {
        this.app.use(cors());
    };
    App.prototype.setUpRotes = function () {
        routes_1.UserRoute.getRoutes(this.app);
    };
    App.prototype.listenOn = function (port) {
        this.app.listen(process.env.PORT || port);
    };
    App.prototype.startApp = function () {
        this.setUpMiddlewares();
        this.setUpRotes();
        this.listenOn(3000);
    };
    return App;
}());
var app = new App();
app.startApp();
