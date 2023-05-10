import Assistentes from './Assistentes';
import './App.css';

function App() {
  return (
    <body>
    <nav class="navbar bg-success pt-3 pb-3">
    <div class="container-fluid">
      <div class="navbar-brand ml-2 text-light">
        Assistentes Pessoais Digitais
        </div>
      </div>
    </nav>
    <div className="App mt-4">
      <Assistentes 
        name='Alexa'
        img='https://m.media-amazon.com/images/I/51V1+7TE4jL.png'
        descricao='A Amazon Alexa, também conhecida como Alexa, é uma assistente virtual desenvolvida pela Amazon, utilizada pela primeira vez como sistema embarcado nos alto-falantes inteligentes Amazon Echo.'
        at='@alexa99'
      />
      <Assistentes 
        name='Cortana'
        img='https://i0.wp.com/www.tecstudio.com.br/wp-content/uploads/2016/01/Cortana.png'
        descricao='Cortana é um/a assistente virtual inteligente do sistema operacional Windows 10 disponível em base opt-in. O seu nome vem da Cortana, personagem de inteligência artificial da franquia Halo.'
        at='@cortana32'
      />
      <Assistentes 
        name='Siri'
        img='https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_heros/mini-hero-siri.png'
        descricao='Siri é um assistente virtual inteligente para sistemas Apple. Sendo exclusivo da Apple e utilizando processamento de linguagem natural para responder perguntas, fazer recomendações e executar ações.'
        at='@siri01'
      />
    </div>
    </body>
  );
}

export default App;
