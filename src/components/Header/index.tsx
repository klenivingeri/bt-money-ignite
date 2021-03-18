import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles'
//import 
export function Header(){
    return(
        <Container>
            <Content>
            <img src={logoimg} alt="dt money"/>
            <button type="button">nova Transação</button>
            
            </Content>
        </Container>
    )
}


/**
 * 
 *  importar o arquivo de img 
 * 
 *  2) Container é o nosso header que renomeamos dentro do arquibo styles..
 *     O arquivo styles.ts não precisa da estenção tsx pq não possui Html
 * 
 */