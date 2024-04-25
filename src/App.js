// App.js
import React from 'react';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <div className="App">
      <h1>Invoice Management System</h1>
      <InvoiceList />
      <InvoiceForm />
    </div>
  );
}

export default App;
