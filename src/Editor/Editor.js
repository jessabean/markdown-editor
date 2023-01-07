import { useState, useEffect } from "react";
import './Editor.css'
import { marked } from "marked";

function Editor() {
  const [markdownText, setMarkdownText] = useState(() => {
    if (typeof window === 'undefined') {
      return '';
    }

    try {
      const text = localStorage.getItem('text');

      return text ? text : '';
    } catch (error) {
      console.log(error);
      return '';
    }
  });

  function handleChange(event) {
    const text = event.target.value;
    setMarkdownText(text);
  }

  function handleSave() {
    localStorage.setItem('text', markdownText);
  }

  function renderText(text) {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  useEffect(() => {
    setMarkdownText(markdownText);
    handleSave();
  }, [markdownText])
  

  return (
    <div className="editor-layout">
      <section className="editor__pane editor__markdown">
        <header className="editor__header">Markdown</header>
        <textarea className="editor__textarea" onChange={handleChange} value={markdownText} />
      </section>

      <section className="editor__pane editor__preview">
        <header className="editor__header">Preview</header>
        <div className="editor__render" dangerouslySetInnerHTML={renderText(markdownText)}></div>
      </section>
    </div>
  );
}

export default Editor;