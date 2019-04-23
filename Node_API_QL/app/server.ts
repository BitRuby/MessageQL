import http from "http";
import { App } from "./app";

const a: App = new App();
const port = process.env.PORT || 5000;
const server = http.createServer(a.app);

server.listen(port, () => {
  console.log(`** Welcome to MessageQL API **`);
  console.log(`Server started at port: ${port}`);
});
