# WeFit E-commerce

Projeto de e-commerce simplificado desenvolvido com React + TypeScript + styled-components para o desafio da WeFit.

## 🚀 Funcionalidades

- **Home**: Lista de filmes disponíveis para compra, buscados da API
- **Carrinho**: Gerenciamento de itens no carrinho com cálculo de total
- **Compra Realizada**: Confirmação de pedido com opção de voltar à loja

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- styled-components
- React Router DOM
- Axios
- Context API

## 📋 Pré-requisitos

- Node.js 14+ instalado
- npm ou yarn como gerenciador de pacotes
- Conexão com internet (para acessar a API externa) 

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button/         # Botão reutilizável
│   ├── CartItem/       # Item individual do carrinho
│   ├── CartTable/      # Tabela do carrinho
│   ├── EmptyCart/      # Estado vazio do carrinho
│   ├── Header/         # Cabeçalho com navegação
│   ├── LoadingSpinner/ # Spinner de carregamento
│   ├── MovieCard/      # Card de filme individual
│   └── QuantityControl # Controle de quantidade
├── pages/              # Páginas da aplicação
│   ├── Home/           # Página inicial com lista de filmes
│   ├── Cart/           # Página do carrinho
│   └── Success/        # Página de confirmação
├── contexts/           # Contextos React
│   └── CartContext.tsx # Contexto do carrinho
├── services/           # Serviços e APIs
│   └── api.ts         # Configuração da API
├── config/             # Configurações
│   └── api.ts         # Configuração da API
├── types/              # Definições de tipos TypeScript
├── styles/             # Estilos globais
└── assets/             # Imagens e recursos estáticos
```

## 🚀 Como Executar

### Passos para Execução

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/DeboraLara1/Desafio-Tecnico-WeFit.git
   cd Desafio-Tecnico-WeFit/wefit-ecommerce
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Executar a aplicação React:**
   ```bash
   npm start
   ```

4. **Acessar a aplicação:**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera build de produção
- `npm run eject`: Ejecta as configurações (irreversível)

## 🌐 API

A aplicação consome a API de filmes da WeFit:
- **Endpoint**: ` https://wefit-movies.vercel.app/api/movies`
- **Método**: GET
- **Resposta**: Lista de filmes com id, título, preço e imagem
- **Status**: API externa e pública, não requer configuração local

## ✨ Características do Projeto

- **TypeScript**: Tipagem forte para melhor desenvolvimento
- **styled-components**: CSS-in-JS para estilos componentizados
- **Context API**: Gerenciamento de estado global do carrinho
- **Responsivo**: Design adaptável para diferentes dispositivos
- **Componentização**: Estrutura modular e reutilizável

## 🎯 Funcionalidades do Carrinho

- Adicionar filmes ao carrinho
- Remover itens individuais
- Cálculo automático do total
- Estado persistente durante a sessão
- Tela de carrinho vazio com opção de voltar



## 📱 Compatibilidade

- Navegadores modernos
- React 18+
- Node.js 14+
