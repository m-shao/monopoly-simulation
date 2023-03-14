import { properties } from "./properties";
import {useState, useRef} from 'react'

function App() {
  const tile = useRef(0)
  const [update, setUpdate] = useState("")
  const [originalArr, setOriginalArr] = useState(properties.slice())
  console.log(originalArr)
  const diceSimulation = () => {
    let randNum1 =  Math.floor(Math.random() * 6) + 1;
    let randNum2 =  Math.floor(Math.random() * 6) + 1;
    let newTile = randNum1 + randNum2 + tile.current
    if (newTile > 40){
      newTile = newTile - 40
    }
    tile.current = newTile
    originalArr[tile.current - 1][0]++
  }
  function sortByFirstValueReverse(arr) {
    arr.sort(function(a, b) {
      return b[0] - a[0];
    });
    return arr;
  }

  for(let i=0; i < 10000000; i++){
    diceSimulation()
  }
  const hello = [...sortByFirstValueReverse([...originalArr])]
  
  return (
    <div className="App w-screen flex justify-center p-12 flex-col gap-6">
      {hello.map((property, index) => {
        return ( 
          <div className="flex gap-6">
            <div className="w-6 h-6" style={{backgroundColor: property[1][Object.keys(property[1])[0]]}}></div>
            <h1>{Object.keys(property[1])[0]}</h1>
            <h1>{property[0]}</h1>
          </div>
        )
      })}
      
    </div>
  )
}

export default App
