import React from 'react';
import './index.css'



function App() {
  return (
    <div className='wrapper'>

      <div className='flex-row'>
        <input className='calculator-input ' type="number"></input>
      </div>
      <div className='flex-row '>
        <button className='caculator-button light-grey m-5px'>
          7
        </button>
        <button className='caculator-button light-grey m-5px'>
          8
        </button>
        <button className='caculator-button light-grey m-5px'>
          9
        </button>
        <button className='caculator-button light-blue m-5px'>
          ÷
      </button>
      </div>
      <div className='flex-row'>
        <button className='caculator-button light-grey m-5px'>
          4
      </button>
        <button className='caculator-button light-grey m-5px'>
          5
      </button>
        <button className='caculator-button light-grey m-5px'>
          6
      </button>
        <button className='caculator-button light-blue m-5px'>
          ×
  </button>
      </div>
      <div className='flex-row'>
        <button className='caculator-button light-grey m-5px'>
          1
    </button>
        <button className='caculator-button light-grey m-5px'>
          2
    </button>
        <button className='caculator-button light-grey m-5px'>
          3
    </button>
        <button className='caculator-button light-blue m-5px'>
          -
</button>
      </div>
      <div className='flex-row'>
        <button className='caculator-button light-grey m-5px'>
          0
  </button>
        <button className='caculator-button light-grey m-5px'>
          .
  </button>
        <button className='caculator-button light-grey m-5px'>
          =
  </button>
        <button className='caculator-button light-blue m-5px'>
          +
</button>
      </div>
    </div>

  );
}

export default App;
