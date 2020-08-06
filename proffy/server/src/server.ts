import express from "express";
import cors from "cors";
import routes from "./routes";

/*Declarando a Função*/
const app = express();

app.use(cors());

/*Por padrão o express não entende o formato Json assim é preciso dizer a ele*/
app.use(express.json());
app.use(routes);

/*Informando que o aplicativo responderá e receberá instrução pela porta*/
app.listen(3333);
