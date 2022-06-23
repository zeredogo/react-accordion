import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestion] = useState(data)

  return (
    <div>
<main >
      <div className='container'>
          <h3>questions and answers about login</h3>
          <section className='info'>
            {
              questions.map((question) => {
                return <SingleQuestion key={question.id} {...question}/>
              })
            }
          </section>
      </div>
    </main>
    
    </div>
    
  );
}

export default App;
