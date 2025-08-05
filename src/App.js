// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import {useTelegram} from 'src/hooks/useTelegram.js'


const tg = window.Telegram.WebApp;

function App() { 
  const { onToggleButton, tg } = useTelegram();

  useEffect( () => {
      tg.ready(); // приложение приинициализировалось и его можно использовать
 }, []);
  
  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
