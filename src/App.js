// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect( () => {
      tg.ready(); // приложение приинициализировалось и его можно использовать
 }, []);
  
  
//   return (
//     <div className="App">
//       work
//       <button onClick={onClose}>Закрыть</button>
//     </div>
//   );
// }

export default App;
