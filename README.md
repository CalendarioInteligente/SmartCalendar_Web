# SmartCalendar\_web

**SmartCalendar\_web** é uma aplicação web em React para gerenciamento inteligente de eventos e compromissos. Ela oferece autenticação de usuário, interface de login e signup, além de um calendário interativo para criar, editar e remover agendamentos.

---

## 🚀 Tecnologias e Dependências

* **React** (v18+)
* **React Router DOM** 
* **React Calendar** 
* **Axios** 
* **Context API** 
* **CSS Modules / Arquivos CSS** 

> Confira o `package.json` para a lista completa de dependências.

---

## ⚙️ Como Executar Localmente

### Pré-requisitos

* Node.js (>=16)
* npm ou yarn

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/SmartCalendar_web.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd SmartCalendar_web
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure variáveis de ambiente (opcional):

   * `REACT_APP_API_BASE_URL` (ex: `http://localhost:3000`)

   > Se não informado, a aplicação usa `http://localhost:3000` por padrão.

5. Inicie a aplicação em modo de desenvolvimento:

   ```bash
   npm start
   ```

6. Abra no navegador:

    [http://localhost:3000](http://localhost:3000)

---

## 🔒 Autenticação

- Ao carregar a aplicação, é feita uma chamada para `/api/oauth` via `authenticate.js`.
- Se o usuário não estiver autenticado, é redirecionado para `/login`.
- Após login ou signup, recebe credenciais via cookie;
- O contexto global (`AuthProvider`) gerencia o estado de autenticação.

---

## 🗓️ Funcionalidades Principais

- **Login e Signup**: Tela única que alterna entre login e cadastro (`LoginPage.jsx`).
- **Calendário Interativo**: Seleção de dia com `react-calendar` e janela de criação de eventos (componente `EventWindow`).
- **Listagem de Eventos**: Visualização, edição e remoção de agendamentos na lateral.
- **Requisições API**: Endpoints REST para CRUD de eventos (via `axios.js`).

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
