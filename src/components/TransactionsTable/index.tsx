import { useContext } from "react";

import { Container } from "./styles";
import { useTransactions } from '../../hooks/useTransactions';

export function TransactionsTable(){
    const { transactions } = useTransactions()


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                    <tbody>{transactions.map(transaction => (
                        
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                                }).format(transaction.amount)/* 1 */} 
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                            { new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                            )}
                            </td>
                        </tr>
                
                    ))}
                    </tbody>

                
            </table>
        </Container>
    )
}

/**
 * 1) API nativa do proprio browser, lib Intl.NumberForma para mascara de valores não precisar instalar
 *  2) API nativa do proprio browser, lib DateTimeFormat para mascara de datas  não precisar instalar
 */