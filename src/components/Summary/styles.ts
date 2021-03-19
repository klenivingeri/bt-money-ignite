import styled from "styled-components";

export const Container = styled.div`
 display: grid; //1
 grid-template-columns: repeat(3, 1fr); // 2
 gap:2rem;
 margin-top: -10rem;

 div{
     background: var(--shape);
     padding: 1.5rem 2rem;
     border-radius: 0.25rem;
     color: var(--text-title);
     
     header{
        display:flex;
        justify-content: space-between;
        align-items: center;
     }

     strong{
         display:block; // 3
         margin-top: 1rem;
         font-size: 2rem;
         font-weight:500;
         line-height:3rem;

     }
     &.highlight-background{
         background: var(--green);
         color:#FFF;

     }
 }
`


/**
 * 
 *  1) Divs uma ao lados das outras é uma boa ideia pensar em usr grid's
 *     pode se usar flex.
 * 
 *  2)  grid-template-columns: repeat(3, 1fr); //  grid-template-columns: 1fr 1fr 1fr
 *      Estabelecem um padrão para os filhos 
 * 
 *  3)  Por padrão o strong vem com o display inline, e para o margin funcionar precisa estar block
 * 
 */