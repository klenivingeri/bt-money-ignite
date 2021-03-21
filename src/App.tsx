import  Modal  from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from 'react'
import { NewTransactionsModal } from './components/NewTransactionsModal';

Modal.setAppElement('#root'); // para ajudar na acessibilidade

export function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
   
     <>
      <Header 
      onOpenNewTransationModal={handleOpenNewTransactionModal}
      />
      <Dashboard />

      <NewTransactionsModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
      
    </>
  );
}


