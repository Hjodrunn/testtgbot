// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect( () => {
      tg.ready(); // приложение приинициализировалось и его можно использовать
 }, []);
  
  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
