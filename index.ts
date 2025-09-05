import Express from "express";
import router from "./routes/";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { logMiddleware } from "./middleware";
import { Database } from "./libs/Database";
const app = Express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(Express.static(path.join(__dirname, 'public')));

app.use(Express.json());

app.use(logMiddleware);
app.use(Express.urlencoded({ extended: true }));


app.set("views", path.join(__dirname, "views", "pages"));
app.set('view engine', 'ejs');


const dbPool =Database.getPool()
dbPool.query("SELECT 1 +1 as result").then(() => {console.log("bdd ok")

})
.catch(()=> {
    console.error("BDD KO");
    process.exit(1);

})


app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

