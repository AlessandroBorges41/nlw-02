import express from "express";

/*Declarando a Função*/
const app = express();

app.get('/users', (request, response) => {
    console.log('testando');
    return response.json(['Hello World']);

})

/*Informando que o aplicativo responderá e receberá instrução pela porta*/
app.listen(3333);
