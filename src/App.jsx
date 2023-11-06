import './App.css';

function Cadastrar() {
  return (
    <form>
      <label htmlFor="">E-mail:</label>
      <input type="email" required/>
      <br/>
      <label htmlFor="">Senha:</label>
      <input type="password" required/>
      <br/>
      <button>Cadastrar</button>
    </form>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cadastrar/>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
