import React, { useEffect} from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
// Componente
// Estado
// Propriedade



function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        console.log(position);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,  
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>  
        <form>
          <div className="input-block">
            <label htmlFor="">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>
          
          <button type="submit">Salvar</button>

        </form>
      </aside>  
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/22828912?s=460&v=4" alt="Fernando Ued"/>
              <div className="user-info"> 
                <strong>Fernando Ued</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Estudando e aprendendo desenvolvimento Web.</p>
            <a href="https://github.com/AllstarUed">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/22828912?s=460&v=4" alt="Fernando Ued"/>
              <div className="user-info"> 
                <strong>Fernando Ued</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Estudando e aprendendo desenvolvimento Web.</p>
            <a href="https://github.com/AllstarUed">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/22828912?s=460&v=4" alt="Fernando Ued"/>
              <div className="user-info"> 
                <strong>Fernando Ued</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Estudando e aprendendo desenvolvimento Web.</p>
            <a href="https://github.com/AllstarUed">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/22828912?s=460&v=4" alt="Fernando Ued"/>
              <div className="user-info"> 
                <strong>Fernando Ued</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Estudando e aprendendo desenvolvimento Web.</p>
            <a href="https://github.com/AllstarUed">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>  
  );
}

export default App;
