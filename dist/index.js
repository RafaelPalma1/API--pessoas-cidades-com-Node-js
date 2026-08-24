"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
// eslint-disable-next-line no-console
server_1.server.listen(process.env.PORT || 3000, () => console.log(`App is running on port ${process.env.PORT || 3000}`));
