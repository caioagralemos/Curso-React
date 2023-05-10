import Assistentes from './Assistentes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Assistentes 
        name='Alexa'
        img='https://m.media-amazon.com/images/I/51V1+7TE4jL.png'
        descricao='A Amazon Alexa, também conhecida como Alexa, é uma assistente virtual desenvolvida pela Amazon, utilizada pela primeira vez como sistema embarcado nos alto-falantes inteligentes Amazon Echo criados pelo Amazon Lab126.'
      />
      <Assistentes 
        name='Cortana'
        img='https://i0.wp.com/www.tecstudio.com.br/wp-content/uploads/2016/01/Cortana.png'
        descricao='Cortana é um/a assistente virtual inteligente do sistema operacional Windows 10 disponível em base opt-in. O seu nome vem da Cortana, personagem de inteligência artificial da franquia Halo.'
      />
      <Assistentes 
        name='Siri'
        img='https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_heros/mini-hero-siri.png'
        descricao='Siri é um assistente virtual inteligente para sistemas Apple. Sendo exclusivo da Apple e utilizando processamento de linguagem natural para responder perguntas, fazer recomendações e executar ações.'
      />
    </div>
  );
}

export default App;
