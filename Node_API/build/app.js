"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        return express_1.default();
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map