import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width:100%;
        border-spacing: 0 0.5rem; // 1)
    }

    th{
        color:var(--text-body);
        font-weight:400;
        padding: 1rem 2rem;
        text-align: left;
        line-height:1.5rem;
    }
    td{
        padding: 1rem 2rem;
        border:0;
        background: var(--shape);
        color: var(--text-body);
        border-radius:0.25rem;

        &:first-child{
            color: var(--title);
            font-weight:500;
        }

        &.deposit{
            color: var(--green);
            font-weight:500;
        }
        &.withdraw{
            color: var(--red);
            font-weight:500;
        }
    }


`
/**
 * 
 *   1) border-spacing: 0 0.5rem;
 *      Utilizado para dar espaço dentro da tabela
 * 
 * 
 * 
 * 
 * 
 * 
 */
