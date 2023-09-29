import express, { Router } from 'express'
import index from './routes/index.routes.js'
import url from 'url'
import path from 'path'
import { engine } from 'express-handlebars';
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/* init */
const app = express()
app.set("port", process.env.PORT || 5000)
app.set("views", path.join(__dirname, "views"));

/* handlebars */
app.engine('.hbs', engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
  }));
  app.set("view engine", ".hbs");

/* Routes */
app.use(index)

/* public */
app.use(express.static(path.join(__dirname, "public")))

/* server */
app.listen(app.get("port"), () => {
    console.log(
        "El servidor se inicio en el puerto " +
        "http://localhost:" +
        app.get("port")
    );
});