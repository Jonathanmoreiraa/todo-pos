import './App.css';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState("");
  const [elements, setElement] = useState([]);

  const addToDo = () => {
    elements.push(value);
    setValue("");
    console.log(elements)
  } 

  const apagar = (i) => {
    setElement(elements.filter(function (element, index) {return index !== i}));
  }

  return (
    <div className="App">
      <div className='barra_pesquisa'>
        <input type="text" placeholder="Digite um ToDo" className='pesquisa' onChange={(e) => setValue(e.target.value)}/>
        <button className='button_pesquisa' onClick={() => addToDo()}>Adicionar</button>
      </div>
      <div className='conteudo'>
        {
          elements.length > 0 && (
            <ul>
              {
                elements.map((element, i) => {
                  return (
                    <li>
                      <p>{element} </p>
                      <a onClick={() => apagar(i)}>Excluir</a>
                    </li>
                  )
                })
              }
            </ul>
          )
        }
      </div>
    </div>
  );
}

export default App;
