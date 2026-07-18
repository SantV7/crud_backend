import { app } from "./app.ts";

const PortServer = 2007

app.listen(PortServer, () => console.log(`http://localhost:${PortServer}/`))