# Introdução à aplicação

## Premissas assumidas

Durante o desenvolvimento do projeto, algumas premissas foram estabelecidas para orientar o escopo e o comportamento da aplicação. Uma das premissas principais é que seria somente realizada uma consulta por vez. Isso ajudou a simplificar o fluxo de interação do usuário e a manter a interface mais direta. Além de que o usuario nao iria querer manter um log de consultas passadas

## Decisões de projeto

No processo de desenvolvimento, várias decisões foram tomadas para escolher as tecnologias e abordagens adequadas. Aqui estão algumas das decisões mais importantes:

### Tecnologias Utilizadas

- **Frontend com React + Vite em JavaScript**: A escolha do React e do Vite como a base do frontend foi feita com base na familiaridade e na eficiência que essas tecnologias proporcionam. 

- **Bootstrap para Componentes Responsivos**: A integração do Bootstrap foi escolhida para melhorar a usabilidade e a aparência da interface. 

- **Backend com Flask**: Para o backend da aplicação, o Flask foi selecionado devido à sua simplicidade e eficiência para projetos com requisitos menos complexos. 

## Instalação e Execução

Para começar a utilizar o projeto, siga as instruções abaixo:

1. **Frontend**:
   No diretório "frontend", execute o seguinte comando para iniciar a aplicação no modo de desenvolvimento:

```
npm install
npm run dev
```

Isso também iniciará a API do backend, possibilitando a interação completa entre o frontend e o backend.

2. **Acesso à Aplicação**:
Para visualizar o frontend, acesse [http://localhost:5173](http://localhost:5173) no seu navegador. A API do backend está disponível em [http://localhost:5000/api](http://localhost:5000/api).