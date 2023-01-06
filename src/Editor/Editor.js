import { useState } from "react";
import './Editor.css'

function Editor() {
  return (
    <div className="editor-layout">
      <section className="editor__markdown">
        <header className="editor__header">Markdown</header>
        <textarea className="editor__textarea" />
      </section>

      <section className="editor__preview">
        <header className="editor__header">Preview</header>
        <div className="editor__render"></div>
      </section>
    </div>
  );
}

export default Editor;