import { useContext } from "react";

import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';

export function TransactionTable(){
    const transactions = useContext(TransactionsContext);
    console.log(transactions)

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
                    <tbody>{transactions.map(transaciton => (
                        
                        <tr key={transaciton.id}>
                            <td>{transaciton.title}</td>
                            <td className={transaciton.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                                }).format(transaciton.amount)/* 1 */} 
                            </td>
                            <td>{transaciton.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaciton.createdAt)) /* 2 */}
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