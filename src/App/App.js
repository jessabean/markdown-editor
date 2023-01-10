import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Editor from '../Editor/Editor';
import Nav from '../Nav/Nav';
import { Helmet } from "react-helmet";

const initialFile = {
  id: 123,
  name: 'Untitled',
  text: ''
}

function App() {
  const [theme, setTheme] = useState('light');
  const [showMenu, setShowMenu] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(() => {
    if (typeof window === 'undefined') {
      return initialFile;
    }

    try {
      const savedFiles = JSON.parse(localStorage.getItem('files'));
      const lastIndex = savedFiles.length - 1;
      const file = savedFiles[lastIndex];
      return file ? file : initialFile;
    } catch (error) {
      console.log(error);
      return initialFile;
    }
  });

  function handleToggle(e) {
    setShowMenu(e);
  }

  const handleFileSave = useCallback((file) =>  {
    setCurrentFile(file);
    
    const filesCopy = [...files];
    if (!filesCopy.length) {
      filesCopy.push(currentFile);
    } else {
      const foundIndex = filesCopy.findIndex(el => el.id === currentFile.id);
      filesCopy[foundIndex] = currentFile;
    }

    setFiles([...filesCopy]);
    localStorage.setItem('files', JSON.stringify(filesCopy));
  }, [currentFile, files]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setShowMenu(showMenu);

    const savedFiles = JSON.parse(localStorage.getItem('files'));
    if(savedFiles) {
      setFiles(savedFiles);
    }
  }, [theme, showMenu, currentFile]);

  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab:wght@300;400;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      </Helmet>
      <Nav isMenuShowing={showMenu} onToggleMenu={handleToggle} />
      <Editor isEditing={currentFile} onUpdate={handleFileSave} />
    </div>
  );
}

export default App;
