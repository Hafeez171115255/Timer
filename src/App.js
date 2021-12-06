// import Clock from './component/Clock'
// import HandleClick from './component/HandleClick';
// import React, {useState} from 'react';
// import { Component } from 'react';

// function App() {
//   const [data,setData]= useState(null);
//   const [print,setPrint]=useState(false);
//   function getData(val){
//    setData(val.target.value)

//   }
// // class App extends Component.React{
// //   constructor(){
// //     var today = new Date(),
// //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// //   }


// }

//   return (
//    <>
//    <div className="App">
//    {/* <input type="time" placeholder="start" onChange={getData}/> */}
//    <button onClick>print value</button>
//    </div>
//    <Clock locale="bn-BD" />
//    <HandleClick locale="bn-BD" />


//    </>

//   );



import Clickcounter from './component/Clickcounter';
import Counter from './component/Counter';

function App() {
  return (

      <div className="app">
        <Counter 
        render={(counter, increamentCount) => (
        <Clickcounter counter={counter} increamentCount={increamentCount}  />
        )}
        />
      
      </div>
   
  );
}

export default App;



































