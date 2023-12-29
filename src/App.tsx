import { useState } from 'react';
import './App.css'
import { SelectDemo } from './components/select/select'
import { TooltipDemo } from './components/tooltip/tooltip'
import {MyCombobox} from './components/select_head/select_head'
const data = [{
  id: 0,
  name: "apple",
},
{
  id: 1,
  name: "banana",
},
{
  id: 2,
  name: "grape",
},
{
  id: 3,
  name: "orange",
},
{
  id: 4,
  name: "lemon",
},

]

function App() {
  const [value, setValue] = useState('');

  return (
    <div className='table' >
      <div className='columnWrapper'>
        <div>
          <h1>Select radix</h1>
          <SelectDemo value={value} onValueChange={setValue} data={data} disabled='orange' required size='large'></SelectDemo>
        </div>
        <div>
          <h1>Select headlessui</h1>
          <MyCombobox/>
        </div>

      </div>
      <div className='columnWrapper'>
        <h1>tooltip</h1>
        <TooltipDemo></TooltipDemo>
      </div>

    </div>
  )
}

export default App
