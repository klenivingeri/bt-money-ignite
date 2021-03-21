
import { Container , TransactionTypeContainer, Radiobox,    } from "./styles";
import Modal from 'react-modal';
import closeimg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { FormEvent, useState } from "react";

import { api } from "../services/api";


interface NewTransactionsModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionsModal({isOpen, onRequestClose}:NewTransactionsModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
   

   function handleCreateNewTransactions(event: FormEvent){
     event.preventDefault() // 1
     const data = {title,value,category,type}

     api.post('/transactions', data)
     
   }
  
  return(
                 
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >

        <button type="button"
        onClick={onRequestClose} 
        className="react-modal-close" 
        >
          <img src={closeimg} alt="fechar" />
        </button>

        <Container onSubmit={handleCreateNewTransactions} >
          <h2>Cadastrar Transsação</h2>
          <input placeholder="Título"
          value={title} 
          onChange={event => setTitle(event.target.value)} />
          <input placeholder="Valor" type="number" 
          value={value} 
          onChange={event => setValue(Number(event.target.value))} />

          <TransactionTypeContainer>
            <Radiobox 
            type="button"
            isActive={ type == 'deposit' }
            activeColor="green"
            onClick={ () => {setType('deposit')}}
            >
              <img src={incomeImg} alt="Entreda" /> 
              Entrega 
            </Radiobox>

            <Radiobox 
            type="button"
            isActive={ type == 'withdraw' }
            activeColor="red"
            onClick={ () => {setType('withdraw')}}
            >
              <img src={outcomeImg} alt="Saida" /> 
              Saída 
            </Radiobox>
            </TransactionTypeContainer>

          <input placeholder="Categoria"
          value={category} 
          onChange={event => setCategory(event.target.value)} />
          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
    
    )
}

/**
 1) previne o evendo padrão que é tentar enviar o form

*/