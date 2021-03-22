import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from "../components/services/api";

interface TransactionsProviderProps{
    children: ReactNode;
}

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //1




interface transactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;

}

export const TransactionsContext = createContext<transactionsContextData>(
    {} as transactionsContextData // hack: força um novo tipo
    );

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput){     
       const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
       const {transaction} = response.data;
       setTransactions([
           ...transactions,
           transaction,
       ]);
    }
    

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)
    return context;
}


/** 1) ou com Pick<Transaction, 'title' | 'amount' | 'type' | 'category'> ou dessa forma abaixo 
 * interface TransactionInput{
    title: string;
    amount: number;
    type:string;
    category:string;
    }


    async devolve uma Promise
 */