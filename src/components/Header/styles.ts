import styled from 'styled-components'

export const Container = styled.header`

 background: var(--blue);

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    justify-content:space-between; //espaço iguais entre os elementos filhos

    button{
        font-size: 1rem;
        color:#fff;
        background: var(--blue-light);
        border:0;
        padding: 0 2rem;
        border-radius: 0.24rem;
        height: 3rem;

        transition: filter 0.2s; // toda vez que a propriedade filter for alterada
        
        &:hover{
            filter: brightness(0.9); // escurece todo conteudo botão
            

        }
    }


`







/**
 * 
 *  10rem = 160px / 1rem = 16px / 0.25rem = 4px
 *  justify-content:space-between; //espaço iguais entre os elementos filhos
 * 'filter: brightness(0.9) // escurece todo conteudo botão
 * 
 * 
 */