import React, { useState } from 'react';

/**
 * This component contains intentional security vulnerabilities
 * to test CodeQL security scanning in the CI pipeline
 */
const SecurityTestComponent: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Security Issue 1: XSS via dangerouslySetInnerHTML
  const renderUserContent = (content: string) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className='user-content'
      />
    );
  };

  // Security Issue 2: eval() usage - code injection vulnerability
  const executeUserCode = (code: string) => {
    try {
      // This is dangerous - allows arbitrary code execution
      return eval(code);
    } catch (error) {
      console.error('Code execution failed:', error);
    }
  };

  // Security Issue 3: SQL injection pattern (simulated)
  const unsafeQuery = (query: string) => {
    // Simulated SQL injection vulnerability
    const sql = `SELECT * FROM users WHERE name = '${query}'`;
    console.log('Executing unsafe query:', sql);
    return sql;
  };

  // Security Issue 4: Prototype pollution vulnerability
  const updateObject = (obj: any, key: string, value: any) => {
    // This allows prototype pollution
    obj[key] = value;
    return obj;
  };

  // Security Issue 5: Insecure random number generation
  const generateToken = () => {
    // Math.random() is not cryptographically secure
    return Math.random().toString(36).substring(2);
  };

  // Security Issue 6: Command injection pattern
  const executeCommand = (userCommand: string) => {
    // Simulated command injection vulnerability
    const command = `ls -la ${userCommand}`;
    console.log('Would execute:', command);
    return command;
  };

  // Security Issue 7: Regular expression DoS (ReDoS)
  const validateEmail = (email: string) => {
    // This regex is vulnerable to ReDoS attacks
    const regexPattern =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regexPattern.test(email);
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserInput(value);

    // Trigger various security issues
    executeUserCode(value);
    unsafeQuery(value);
    updateObject(window, '__proto__.polluted', true);
  };

  const handleSearch = () => {
    executeCommand(searchQuery);
    const token = generateToken();
    console.log('Generated insecure token:', token);
  };

  return (
    <div className='security-test-component p-4'>
      <h2 className='text-xl font-bold mb-4'>Security Test Component</h2>
      <p className='text-red-600 mb-4'>
        ⚠️ This component contains intentional security vulnerabilities for
        testing
      </p>

      <div className='mb-4'>
        <label htmlFor='user-input' className='block mb-2'>
          User Input (XSS Test):
        </label>
        <input
          id='user-input'
          type='text'
          value={userInput}
          onChange={handleUserInput}
          placeholder="Try: <script>alert('XSS')</script>"
          className='border p-2 w-full'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='search-query' className='block mb-2'>
          Search Query (Command Injection Test):
        </label>
        <input
          id='search-query'
          type='text'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Try: && rm -rf /'
          className='border p-2 w-full'
        />
        <button
          onClick={handleSearch}
          className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'>
          Search
        </button>
      </div>

      {/* Render user content with XSS vulnerability */}
      {userInput && renderUserContent(userInput)}

      <div className='mt-4 text-sm text-gray-600'>
        <p>Security issues present in this component:</p>
        <ul className='list-disc list-inside'>
          <li>Cross-Site Scripting (XSS)</li>
          <li>Code Injection via eval()</li>
          <li>SQL Injection patterns</li>
          <li>Prototype Pollution</li>
          <li>Insecure Random Generation</li>
          <li>Command Injection patterns</li>
          <li>Regular Expression DoS (ReDoS)</li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityTestComponent;
