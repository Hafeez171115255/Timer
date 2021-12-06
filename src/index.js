
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals'

// p-1================

// const element =React.createElement('h1' , null ,'Hello World');
// let fName="russell";
// let lName="hafeez";
// console.log(fName+" "+lName);
// console.log(element);
// const element =<h1>hello syntaxive</h1>;


// p-2====================

// function getCreating(user){
//   if(user){
//     return <h1> Hello, {user}</h1>
//   }
//   return <h1>Hello strangers</h1>;
// }

// console.log(getCreating('rasel'));


// p-3 ===================

// const index = 0;
// setInterval(() => {
//   const element = (
//     <h1 className="heading" tabIndex={index}>
//       <span className="text">
//         Hello World! {new Date().toLocaleTimeString()}
//       </span>
//       <img src="" />

//     </h1>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// },1000);

// p-4====================
// component

// function Clock({ locale }) {
//   return (
//     <h1 className="heading">
//       <span className="text">
//         Hello World! {new Date().toLocaleTimeString(locale)}
//       </span>
//     </h1>
//   );
// }
// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));

// we made a component <clock /> ,
// it will work like <div> , <img> component

// p-5 ========================

// class Clock extends React.Component {
//   render() {
//     return (
//       <>
//       <h1 className="heading">
//         <span className="text">
//           Hello World! {new Date().
//           toLocaleTimeString(this.props.locale)}
//         </span>
//       </h1>
//       <h1 className="heading">
//         <span className="text">
//           Hello - {this.props.children} {new Date().
//           toLocaleTimeString(this.props.locale)}
//         </span>
//       </h1>
//       </>
//     );
//   }
// }


// const clockcomponent = new Clock();
// ReactDOM.render(clockcomponent.print(), document.getElementById('root'))
// ReactDOM.render(<Clock locale='bn-BD' />, document.getElementById('root'));
// ReactDOM.render(<Clock> test </Clock>, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);
reportWebVitals()