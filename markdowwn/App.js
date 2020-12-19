import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] =useState('### Markdown preview, google (markdown cheat sheet )for further info ')
  return <main >
    <section className="markdown">
      <textarea  value ={markdown} onChange={(e) =>{ setMarkdown(e.target.value)}} className="input"></textarea>
      <article className='result'>

      <ReactMarkdown>

        {markdown}

      </ReactMarkdown>


      </article>
    </section>
  </main>
}

export default App
