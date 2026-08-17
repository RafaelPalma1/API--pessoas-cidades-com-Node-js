import { server } from "./server/server";

server.listen(process.env.PORT || 3000, () => console.log(`App is running on port ${process.env.PORT || 3000}`));

