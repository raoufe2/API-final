import expres from "express";
import bodyParser from "body-parser";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = expres();
const server = createServer(app);
const io = new Server(server);

const port = 8080;

app.use(bodyParser.json());

//import route
import {router} from "./routes/Auth.js";
import {routerProduit} from "./routes/menu.js";
import {categorieRouter} from "./routes/categories.js";
import {commandRouter} from "./routes/Commande.js";
import {LivreurRouter } from "./routes/Livreur.js";
import { routerBoisson } from "./routes/Boisson.js";
import { favoritRoute } from "./routes/favorit.js";


//client et livreur
app.use("/api/" , router);
app.use("/api/livreur" , LivreurRouter);
//plat avec les boisson
app.use("/api/plat" , routerProduit);
app.use("/api/boisson" , routerBoisson);
//les categories
app.use("/api/categories" , categorieRouter);
//les commande
app.use("/api/commande" , commandRouter);
//les favorit 
app.use("/api/fav" , favoritRoute);

app.get("/" , (req , res) => {
    res.send("Home page");
});



//try to implement the websocket io 
io.on('connection', (socket) => {
    console.log('a user connected');
});


server.listen(port , () => {console.log("Open server at port 8080")});
