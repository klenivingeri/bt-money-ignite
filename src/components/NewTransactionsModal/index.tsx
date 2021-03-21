
import { Container , TransactionTypeContainer, Radiobox,    } from "./styles";
import Modal from 'react-modal';
import closeimg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { useState } from "react";


interface NewTransactionsModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionsModal({isOpen, onRequestClose}:NewTransactionsModalProps){
   const [type, setType] = useState('deposit')


   console.log(type)
  
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

        <Container >
          <h2>Cadastrar Transsação</h2>
          <input placeholder="Título" />
          <input placeholder="Valor" type="number" />

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

          <input placeholder="Categoria" />
          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
    
    )
}