import { useState } from "react";
import './Editor.css'

function Editor() {
  return (
    <div className="editor-layout">
      <section className="editor-markdown">markdown section</section>

      <section className="editor-preview">preview section</section>
    </div>
  );
}

export default Editor;