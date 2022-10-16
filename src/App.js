/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Logo from '../src/assets/logo.png';
import _left from '../src/assets/left-side.png';
import light from '../src/assets/light-focus.png';
import _right from '../src/assets/right-side.png';
import smoke_red from '../src/assets/shaded-red.png';
import man from '../src/assets/man.png';


function App() {
  return (
    <div className="App">
        <div className="container-main">
            <img className="image" src={Logo}/>
            <strong className="text-pede-ai">
             pede
             <span>.</span>
             ai 
            </strong>
        </div>

    <header className="banner">
    <img className="light" src={light} />
    <img className="bleft" src={_left} />
    <img className="bright" src={_right} />
    <img className="man" src={man} />
    <img className="smoke" src={smoke_red} />
    <div className="text_form">
      <h1 className="title">Pede de tudo, no pede<span>.</span>ai </h1>
      <h2 className="subtitle">Delivery de comida, gás, água, farmácia e muito mais</h2>
      <form className="formcontainer">
        <div>
          <div className="box-city">
            <div className="city">
              <input type="text" placeholder="Escolha sua cidade" className="name-city" />
            </div>
          </div>
          <div className="box-bairro">
            <div className="bairro">
              <input type="text" placeholder="Escolha seu bairro" className="name-bairro" />
            </div>
          </div>
            <button>Buscar</button>
        </div>
      </form>
    </div>
    </header>

    <div className="container-conteudo">
    <section className="servicos">
      <h1>Entregamos para você</h1>
      <ul>
        <li className="restaurante"><a href="#"><img src="macarrao.png" alt="Restaurantes" /><p>Restaurantes</p></a></li>
        <li className="mercado"><a href="#"><img src="mercado.png" alt="Mercado" /><p>Mercado</p></a></li>
        <li className="farmacia"><a href="#"><img src="saude.png" alt="Farmácias" /><p>Farmácias</p></a></li>
        <li className="loja"><a href="#"><img src="sacola.png" alt="Lojas" /><p>Lojas</p></a></li>
        <li className="pet"><a href="#"><img src="dog.png" alt="Pet Shop" /><p>Pet Shop</p></a></li>
        <li className="vermais"><a href="#"><img src="vermais.png" alt="Ver mais" /><p>Ver mais</p></a></li>
      </ul>
    </section>
    </div>


    </div> /*div principal do codigo*/ 
  );
}

export default App;
