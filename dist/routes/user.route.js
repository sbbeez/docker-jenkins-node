"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("../controllers");
var UserRoute = /** @class */ (function () {
    function UserRoute() {
    }
    UserRoute.getRoutes = function (app) {
        app.get("/user/:id", controllers_1.UserController.getUser);
    };
    return UserRoute;
}());
exports.UserRoute = UserRoute;
