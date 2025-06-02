import React, { useState } from 'react';

/**
 * This component contains intentional security vulnerabilities
 * to test CodeQL security scanning in the CI pipeline
 */
const SecurityTestComponent: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Security Issue 1: XSS via dangerouslySetInnerHTML (High Severity)
  const renderUserContent = (content: string) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className='user-content'
      />
    );
  };

  // Security Issue 2: eval() usage - Direct code injection (Critical)
  const executeUserCode = (code: string) => {
    try {
      // This is VERY dangerous - CodeQL should definitely catch this
      const result = eval(code);
      console.log('Executed user code:', result);
      return result;
    } catch (error) {
      console.error('Code execution failed:', error);
    }
  };

  // Security Issue 3: Function constructor - Alternative code injection (Critical)
  const executeViaFunction = (userCode: string) => {
    try {
      // Another form of code injection that CodeQL should catch
      const func = new Function(userCode);
      return func();
    } catch (error) {
      console.error('Function execution failed:', error);
    }
  };

  // Security Issue 4: Document.write XSS (High Severity)
  const writeToDocument = (content: string) => {
    // Direct DOM manipulation that can lead to XSS
    document.write(content);
  };

  // Security Issue 5: innerHTML assignment (Medium-High Severity)
  const setInnerHTML = (content: string) => {
    const element = document.getElementById('dynamic-content');
    if (element) {
      // Directly setting innerHTML with user input
      element.innerHTML = content;
    }
  };

  // Security Issue 6: postMessage without origin validation (Medium Severity)
  const unsafePostMessage = (data: any) => {
    // Sending data without proper origin validation
    window.parent.postMessage(data, '*');
  };

  // Security Issue 7: localStorage with sensitive data (Medium Severity)
  const storeSensitiveData = (data: string) => {
    // Storing potentially sensitive user input in localStorage
    localStorage.setItem('user_sensitive_data', data);
    localStorage.setItem('user_token', Math.random().toString());
  };

  // Security Issue 8: Unsafe regex that can cause ReDoS (Medium Severity)
  const validateWithUnsafeRegex = (input: string) => {
    // This regex is vulnerable to catastrophic backtracking
    const unsafeRegex = /^(a+)+b$/;
    return unsafeRegex.test(input);
  };

  // Security Issue 9: SQL-like string concatenation (Medium Severity)
  const buildQuery = (userInput: string) => {
    // Simulating SQL injection vulnerability
    const query = "SELECT * FROM users WHERE name = '" + userInput + "'";
    console.log('Unsafe query:', query);
    return query;
  };

  // Security Issue 10: Prototype pollution (High Severity)
  const pollutePototype = (obj: any, key: string, value: any) => {
    // Direct prototype pollution
    if (key === '__proto__') {
      obj[key] = value;
    }
    obj[key] = value;
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserInput(value);

    // Trigger multiple security issues that CodeQL should catch
    executeUserCode(value); // Critical: eval() usage
    executeViaFunction(value); // Critical: Function constructor
    writeToDocument(value); // High: document.write XSS
    setInnerHTML(value); // Medium-High: innerHTML XSS
    storeSensitiveData(value); // Medium: localStorage exposure

    // Test prototype pollution
    const testObj = {};
    pollutePototype(testObj, '__proto__.polluted', true);
  };

  const handleSearch = () => {
    buildQuery(searchQuery); // SQL injection pattern
    unsafePostMessage({ query: searchQuery, token: 'secret123' }); // postMessage vulnerability

    // Test ReDoS
    validateWithUnsafeRegex('a'.repeat(20) + 'c');
  };

  return (
    <div className='security-test-component p-4'>
      <h2 className='text-xl font-bold mb-4'>Security Test Component</h2>
      <p className='text-red-600 mb-4'>
        ⚠️ This component contains CRITICAL security vulnerabilities for testing
      </p>

      <div className='mb-4'>
        <label htmlFor='user-input' className='block mb-2'>
          User Input (Multiple XSS & Code Injection Tests):
        </label>
        <input
          id='user-input'
          type='text'
          value={userInput}
          onChange={handleUserInput}
          placeholder="Try: alert('XSS') or console.log('injected')"
          className='border p-2 w-full'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='search-query' className='block mb-2'>
          Search Query (SQL Injection & postMessage Test):
        </label>
        <input
          id='search-query'
          type='text'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Try: '; DROP TABLE users; --"
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

      {/* Dynamic content area for innerHTML injection */}
      <div id='dynamic-content' className='mt-4 p-2 border'></div>

      <div className='mt-4 text-sm text-gray-600'>
        <p>CRITICAL security issues in this component:</p>
        <ul className='list-disc list-inside'>
          <li>
            🔴 <strong>eval() Code Injection</strong> - Critical
          </li>
          <li>
            🔴 <strong>Function Constructor Injection</strong> - Critical
          </li>
          <li>
            🟠 <strong>document.write XSS</strong> - High
          </li>
          <li>
            🟠 <strong>innerHTML XSS</strong> - High
          </li>
          <li>
            🟠 <strong>dangerouslySetInnerHTML XSS</strong> - High
          </li>
          <li>
            🟠 <strong>Prototype Pollution</strong> - High
          </li>
          <li>
            🟡 <strong>postMessage Origin Bypass</strong> - Medium
          </li>
          <li>
            🟡 <strong>localStorage Data Exposure</strong> - Medium
          </li>
          <li>
            🟡 <strong>ReDoS Attack Vector</strong> - Medium
          </li>
          <li>
            🟡 <strong>SQL Injection Patterns</strong> - Medium
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityTestComponent;
