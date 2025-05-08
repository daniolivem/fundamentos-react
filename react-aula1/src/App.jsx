// Importa o hook useState do React, que será usado para gerenciar o estado do componente.
import { useState } from 'react';
// Importa o arquivo CSS para estilização do componente.
import './App.css';

function App() {
  // Declara uma variável de estado chamada "count" e uma função "setCount" para atualizá-la.
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Renderiza um título na tela. */}
      <h1>Olá, React!</h1>
      
      {/* Renderiza um botão que, ao ser clicado, incrementa o valor de "count". */}
      {/* Corrigido o atributo "onclick" para "onClick" e ajustada a sintaxe da função. */}
      <button onClick={() => setCount(count => count + 1)}>
        Contador: {count}
      </button>
    </div>
  );
}

// Exporta o componente App como padrão para que possa ser importado em outros arquivos.
// Isso é útil para organizar o código e reutilizar componentes em diferentes partes da aplicação.
// O componente App é o ponto de entrada da aplicação React.
export default App;
