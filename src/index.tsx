import React from 'react';
import ReactDOM from 'react-dom';
import { createServer , Model} from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  }, //3

  seeds(server){
    server.db.loadData({
      transactions:[{
        id:1,
        title: 'Freelancer de Website',
        type: 'deposit',
        category: 'Dev',
        amount: 6000,
        createdAt: new Date('2021-02-12')

      },
      {
        id:2,
        title: 'Alugel',
        type: 'withdraw',
        category: 'Alugel',
        amount: 400,
        createdAt: new Date('2021-02-14')

      }]
    })
  },


  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request)=> {
        const data =  JSON.parse(request.requestBody) //1
        return schema.create('transaction', data) //return data; //2

    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/**
 * 
 * 1) Transforma o objeto que vem em js para JSON
 * 
 * 2) verificar no console.log se foi retornado o codigo 201.
 * code de criação com sucesso
 * 
 * 3) Mirage possui um banco de dados interno , schema é o banco de dados
 */