import './App.css';
import Editor from '../Editor/Editor';
import Nav from '../Nav/Nav';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [showMenu, setShowMenu] = useState(false);

  function handleToggle(e) {
    setShowMenu(e);
  }

  useEffect(() => {
    setTheme(theme);
    setShowMenu(showMenu);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, showMenu]);

  return (
    <div className="App">
      <Nav isMenuShowing={showMenu} onToggleMenu={handleToggle} />
      <Editor />
    </div>
  );
}

export default App;
