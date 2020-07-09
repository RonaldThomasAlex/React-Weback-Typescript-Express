import express from 'express'
import path from 'path';

const app: express.Application = express(); //Define the app which is going to run.
const port: string | number = process.env.port || 4444; //Define the port.

/** 
 * Define where the content would be served from - in our case it is static content.
*/
app.use(express.static(path.join(__dirname,"../../build")))

/** 
 * Define the entry point. When loading the app on localhost:8080 we will send the content
 * inside res.send(<Content>)
*/
// app.get("/", (req: express.Request, res: express.Response) => {
//     res.send("Hello world!");
// });
app.get("/", (req: express.Request, res: express.Response) => {
    res.send(path.join(__dirname,"../../build/index.html"));
});

/** 
 * Define on which port the app is running on.
*/
app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});