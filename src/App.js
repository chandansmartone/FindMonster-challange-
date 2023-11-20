import { useEffect,useState } from 'react';
import './App.css';
import { AllCart } from './components/AllCart';

 function App() {
  const [data, setData] = useState(null);
  const [search,setsearch]=useState("");

  useEffect(() => {
    // This code will run after the component has rendered

    // Example of a side effect: fetching data
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>setData(data))
    .catch((err)=>console.error('Error fetching data:', err));
   },[]);
    const HandleChange = (event) => {
    // Update the search state
    setsearch(event.target.value.toLowerCase());
  };

  // Filter data based on the search input
  const filteredData = data? data.filter((d) => d.name.toLowerCase().includes(search))
    : null;
    
  return (
    <div className="App">
    <h1>
      Monsters Rolodex
    </h1>
    <input type="text"  onChange={HandleChange}placeholder='Search monsters'/>
    <AllCart data={filteredData}/>
    </div>
  );
}

export default App;
