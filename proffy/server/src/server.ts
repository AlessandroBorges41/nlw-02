import express from "express";

/*Declarando a Função*/
const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: 'Proffy 01', subject: 'Matemática' },
        { name: 'Proffy 02', subject: 'Física' }
    ]
    return response.json(users);

})

/*Informando que o aplicativo responderá e receberá instrução pela porta*/
app.listen(3333);
