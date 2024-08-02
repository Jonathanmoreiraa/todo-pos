import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [elements, setElement] = useState([]);

  const addToDo = () => {
    elements.push({
      todo: value,
      completed: false
    });
    setValue("");
  } 

  const apagar = (i) => {
    setElement(elements.filter(function (element, index) {return index !== i}));
  }

  const changeStatus = (v, id) => {
    let lista = [...elements];
    lista[id].completed = v;
    setElement(lista);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/todos');
      const json = await response.json();

      if (json.todos) {
        setElement(json.todos);
      }
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      <div className='barra_pesquisa'>
        <input type="text" placeholder="Digite um ToDo"  class="input" onChange={(e) => setValue(e.target.value)}/>
        <button class="button" onClick={() => addToDo()}>Adicionar</button>
      </div>
      <div className='conteudo'>
        {
          elements.length > 0 ? (
            <ul>
              {
                elements.map((element, i) => {
                  return (
                    <li class={`completed_${element.completed}`}>
                      <label class="checkbox" onClick={() => changeStatus(!(element.completed), i)}>
                        <input type="checkbox" checked={element.completed} />
                      </label>
                      <p onClick={() => changeStatus(!(element.completed), i)}>{element.todo} </p>
                      <a onClick={() => apagar(i)}>Excluir</a>
                    </li>
                  )
                })
              }
            </ul>
          ) : (
            <div class="loading">
              <button class="button is-loading is-white">Loading</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
