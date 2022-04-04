import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1 id='app1'>TODO<span id='app2'>App</span></h1>
        <input id='user' type="text" placeholder='Usuário' />
        <input id='password' type="text" placeholder='Senha' />
        <div id='login-div'>
          <button id='login'>Login</button>
          <button id='register'>Register</button>
        </div>
      </header>                                           
    </div>
  );  
}

export default App;
