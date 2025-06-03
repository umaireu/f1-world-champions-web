import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState('');

  // INTENTIONAL SECURITY VULNERABILITY - for testing security pipeline
  const renderUnsafeContent = (input: string) => {
    return { __html: input }; // XSS vulnerability - unsanitized user input
  };

  // ANOTHER SECURITY VULNERABILITY - Code injection via eval()
  const executeUserCode = (code: string): string => {
    try {
      // eslint-disable-next-line no-eval
      return String(eval(code)); // CRITICAL: Code injection vulnerability
    } catch {
      return 'Error executing code';
    }
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

          {/* ANOTHER SECURITY TEST - Code injection */}
          <div>
            <button onClick={() => executeUserCode(userInput)}>
              Execute Code (DANGEROUS!)
            </button>
            <p>Result: {executeUserCode('2 + 2')}</p>
          </div>
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
