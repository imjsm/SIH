import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';  // Import ClerkProvider
import './index.css';
import App from './App';

const clerkPublishableKey = "pk_test_cmFyZS1wZW5ndWluLTI2LmNsZXJrLmFjY291bnRzLmRldiQ";  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPublishableKey}>  {/* Use publishableKey instead of frontendApi */}
      <App />
    </ClerkProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

