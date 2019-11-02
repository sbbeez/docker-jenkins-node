"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.getUser = function (req, res) {
        res.send({ message: "some message for testing" });
    };
    return UserController;
}());
exports.UserController = UserController;
