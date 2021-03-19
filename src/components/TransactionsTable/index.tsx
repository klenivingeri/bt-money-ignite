import { Container } from "./styles";

export function TransactionTable(){
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
                    <tbody>
                        <tr>
                            <td>Desemvolvimento de Web site</td>
                            <td className="deposit">R$ 12.000</td>
                            <td>Desemvolvimento</td>
                            <td>20/02/2021</td>
                        </tr>
                        <tr>
                            <td>Aluguel</td>
                            <td className="withdraw"> - R$ 1.000</td>
                            <td>Casa</td>
                            <td>17/02/2021</td>
                        </tr>
                    </tbody>

                
            </table>
        </Container>
    )
}