import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState('');

  // INTENTIONAL SECURITY VULNERABILITY - for testing security pipeline
  const renderUnsafeContent = (input: string) => {
    return { __html: input }; // XSS vulnerability - unsanitized user input
  };

  return (
    <>
      <h1 className='text-3xl font-bold underline'>F1 World Champions</h1>
      <div className='card'>
        <button
          onClick={() => {
            setCount(count => count + 1);
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        {/* SECURITY VULNERABILITY TEST - XSS via dangerouslySetInnerHTML */}
        <div>
          <input
            type='text'
            value={userInput}
            onChange={e => {
              setUserInput(e.target.value);
            }}
            placeholder='Enter some text...'
          />
          <div dangerouslySetInnerHTML={renderUnsafeContent(userInput)} />
        </div>
      </div>
      <p className='read-the-docs'>
        {' '}
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
