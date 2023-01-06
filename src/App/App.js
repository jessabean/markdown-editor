import { useState, useEffect } from 'react';
import './App.css';
import Editor from '../Editor/Editor';
import Nav from '../Nav/Nav';
import { Helmet } from "react-helmet";

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
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab:wght@300;400;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      </Helmet>
      <Nav isMenuShowing={showMenu} onToggleMenu={handleToggle} />
      <Editor />
    </div>
  );
}

export default App;
