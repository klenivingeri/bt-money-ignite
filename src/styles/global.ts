import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

:root{
    --background: #f8f2f8;
    --red: #E62E4D;
    --blue:#5429CC;
    --blue-light:#6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape:#FFFFFF;

}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    @media (max-width: 1080px){
        font-size: 93.75%; //15px
    }
    @media (max-width: 720){
        font-size: 87.5%; //14px
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
}

button{
    cursor: pointer
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed
}
`

/*

1 ) -webkit-font-smoothing: antialiased;
    hack para deixar as fontes mais nitidas

2 ) font-size: 16px (Desktop padrão)

3 ) hmtl{ Podemos usar o font-size em % com base no valor padrão de 16px 
    pode se fazer o calculo de 16x0,9375 , vamos utilizar rem, ele segue o valor padrão
    que ajudam muito na questão de acessibilidade

4 ) button{ cursor: pointer deixa todos botões "clicaveis"

5 ) disable{} cursor: not-allowed ; deixa ele como proibido

6 ) body, input, textarea, button precisa em portão em todos e não apenas no body, pq eles
    já possuem sua font padrão.
    Por padrao o font-weight é 500 no hmtl por isso fixar 400 que é o padrão da font Poppins



*/