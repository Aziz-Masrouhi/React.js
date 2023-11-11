import { Component } from 'react';
import './App.css';

const list_etudient = [
  { nom: 'Manar', Mathematique: 10.5, Physique: 12, Francais: 16 },
  { nom: 'Mohamed', Mathematique: 13, Physique: 18, Francais: 7 },
  { nom: 'Khalid', Mathematique: 15, Physique: 15, Francais: 13 },
  { nom: 'Ikbal', Mathematique: 11, Physique: 9, Francais: 15 },
  { nom: 'Aziz', Mathematique: 17, Physique: 12, Francais: 6 },
  { nom: 'Said', Mathematique: 14, Physique: 7, Francais: 6 },
  { nom: 'Moujahid', Mathematique: 16, Physique: 17, Francais: 9 },
  { nom: 'Riyad', Mathematique: 19, Physique: 11, Francais: 10 }
]

function Component1() {
  return <ul>
    {list_etudient.map(e =>
      <li>{e.nom} - Moyenne : {((e.Mathematique + e.Physique + e.Francais) / 3).toFixed(2)}</li>)
    }
  </ul>
}

class Component2 extends Component {

  render() {
    return <table>
      <tr>
        <th>Nom</th>
        <th>Math</th>
        <th>Physique</th>
        <th>Francais</th>
        <th>Moyenne</th>
      </tr>
      {
        list_etudient.map(e =>
          <tr>
            <td>{e.nom}</td>
            <td>{e.Mathematique}</td>
            <td>{e.Physique}</td>
            <td>{e.Francais}</td>
            <td>{((e.Mathematique + e.Physique + e.Francais) / 3).toFixed(2)}</td>
          </tr>
        )
      }
    </table>
  }
}

function App() {
  return ( 
    <div className="App">
      <Component1/>
      <hr />
      <Component2/>
    </div>
  );
}

export default App;
