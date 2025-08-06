// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import {useTelegram} from './hooks/useTelegram.js'
const { user, onClose } = useTelegram();


const tg = window.Telegram.WebApp;

function App() { 
  const { onToggleButton, tg } = useTelegram();

  useEffect( () => {
      tg.ready(); // приложение приинициализировалось и его можно использовать
 }, []);
  
  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
