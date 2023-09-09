import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  // useEffect( () =>{
  //   fetch('watches.json')
  //   .then(res=> res.json())
  //   .then(data =>setWatches(data));
  // }, [])
  useEffect( () =>{
    fetch('https://raw.githubusercontent.com/jhankarpHero/watches-data/main/watches.json')
    .then(res=> res.json())
    .then(data =>setWatches(data));
  }, [])
  
  // const watches = [
  //   {id: 1, name: 'Apple watch', price: 200},
  //   {id: 2, name: 'Samsu watch', price: 200},
  //   {id: 3, name: 'MI watch', price: 200},
  // ]

  // const watches = [
  //   {
  //     id: 1,
  //     name: 'Apple Watch Series 7',
  //     price: 399,
  //     // ...other properties
  //   },
  //   {
  //     id: 2,
  //     name: 'Galaxy Watch 4',
  //     price: 249,
  //     // ...other properties
  //   },
  //   {
  //     id: 3,
  //     name: 'Fitbit Versa 3',
  //     price: 229,
  //     // ...other properties
  //   },
  //   {
  //     id: 4,
  //     name: 'Garmin Venu 2',
  //     price: 399,
  //     // ...other properties
  //   },
  //   {
  //     id: 5,
  //     name: 'Huawei Watch GT 3',
  //     price: 299,
  //     // ...other properties
  //   },
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
