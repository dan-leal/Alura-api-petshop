const express = require('express')
const app = express()
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
app.use(express.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.use((erro, req, res, proximo) => {
    let status = 500
    if(erro instanceof NaoEncontrado){
        status = 404
    }
    if(erro instanceof CampoInvalido){
        status = 400
    }
    res.status(status)
    res.send(
        JSON.stringify({ 
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), ()=> console.log('A Api está funcionando!'))