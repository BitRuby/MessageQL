"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var app_1 = require("./app");
var app = new app_1.App();
var port = process.env.PORT || 5000;
var server = http.createServer(app.start());
server.listen(port, function () {
    console.log("** Welcome to MessageQL API **");
    console.log("Server started at port: " + port);
});
//# sourceMappingURL=server.js.map