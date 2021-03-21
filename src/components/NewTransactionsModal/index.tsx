
import { Container , TransactionTypeContainer  } from "./styles";
import Modal from 'react-modal'
import closeimg from '../../assets/fechar.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
interface NewTransactionsModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionsModal({isOpen, onRequestClose}:NewTransactionsModalProps){
    return(
                 
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">

        <button type="button" onClick={onRequestClose}  className="react-modal-close" >
          <img src={closeimg} alt="fechar" />
        </button>
        <Container >
          <h2>Cadastrar Transsação</h2>

          <input placeholder="Título" />
          <input placeholder="Valor" type="number" />

          <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entreda" /> 
            Entrega 
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Saida" /> 
            Saída 
          </button>
          </TransactionTypeContainer>

          <input placeholder="Categoria" />

          <button type="submit">
          Cadastrar
          </button>
        </Container>
      </Modal>
    
    )
}