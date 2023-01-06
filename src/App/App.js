import './App.css';
import Editor from '../Editor/Editor';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
