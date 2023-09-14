import Cone from './Cone';
import { useState } from 'react';
import './App.css';
import Modal from './modal/Modal';


function  App() {

  const [heightOfCone,setHeight] = useState('');
  const [amountSegments,setSegments] = useState('');
  const [radiusOfcone,setRadius] = useState('');
  const [cone, setCone] = useState([])
  const [isModalActive, setModal] = useState(false)

  const makeNewCone = () => {
    if(heightOfCone === '' || radiusOfcone === '' || amountSegments === ''){
      setModal(true)
    }else {
      const newCone = [<Cone height={heightOfCone} radius={radiusOfcone} segments={amountSegments} />];
      setCone(newCone);
      setHeight('');
      setSegments('');
      setRadius('');
    }
  }

  const closeModal = () => {
    setModal(false)
  }


  return(
    <>
      <div style={{marginTop: '30px'}}>
      <div className="settings">
        <div className='input__wrapper'>
          <div className='input__name'>Высота</div>
          <input 
            type="number"
            value={heightOfCone}
            onChange={e => setHeight(e.target.value)}
            placeholder="Высота"
          />
        </div>
      </div>
      <div className="settings">
        <div className='input__wrapper'>
          <div className='input__name'>Количество сегментов</div>
          <input 
            type="number"
            value={amountSegments}
            onChange={e => setSegments(e.target.value)}
            placeholder="Количество сегментов"
          />
        </div>
      </div>
      <div className="settings">
        <div className='input__wrapper'>
          <div className='input__name'>Радиус</div>
          <input 
            type="number"
            value={radiusOfcone}
            onChange={e => setRadius(e.target.value)}
            placeholder="Радиус"
          />
        </div>
        <button onClick={() => makeNewCone()}>Построить конус</button>
      </div>
      </div>
      <div className='cone'>
          {(cone.length !== 0) && cone.map((cone, index) => {
            return(
            <div key={index}>{cone}</div>
            )
          })}
      </div>
      {isModalActive? <Modal closeModal={closeModal}/>: ''}
    </>
  )
}

export default App;
