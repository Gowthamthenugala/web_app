import { useState } from "react";
import "./App.css";


function DataComponent({ data }) {
  return (
    <div className="border p-4 m-4 border-blue-500 rounded-2xl">
      {data.map((item, index) => (
        <div key={index}>
          <h5 className="text-left">{index + 1}. {item.name}</h5>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [data, setData] = useState([{
    name: "gowtham"
  }])

  const [inputValue, setInputValue] = useState("")

  const addData = () => {
    if (inputValue === "") {
      return
    }
    setData((prevData) => {
      return [...prevData, { name: inputValue }]
    })
    setInputValue("")

  }

  return (
    <>
      <div>
        <input className="outline-none border-1 border-amber-400 rounded-xl p-3" value={inputValue} type="text" placeholder="Enter Name" onChange={(e) => setInputValue(() => {
          return e.target.value
        })} />
        <button
          className="border border-amber-400 rounded-xl px-2 py-3 m-4 
             outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
          onClick={addData}
        >
          Add
        </button>

        <div>
          {
            data.length === 0 ? <h1>No Data</h1> : <DataComponent data={data} />
          }
        </div>
      </div>
    </>
  );
}



export default App;
