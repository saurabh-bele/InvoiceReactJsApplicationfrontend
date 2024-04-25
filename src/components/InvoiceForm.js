
import React, { useState } from 'react';
import axios from 'axios';

function InvoiceForm() {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newInvoice = { invoiceNumber,date,amount,customerName,address,mobileNumber };
    axios.post('http://localhost:8080/create-invoices', newInvoice)
      .then(response => {
        console.log('Invoice created successfully: ', response.data);
      })
      .catch(error => {
        console.error('Error creating invoice: ', error);
      });
  };

  return (
    <div>
      <h2>Create Invoice</h2>
      <form onSubmit={handleSubmit}>
        <label>Invoice Number: </label>
        <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
        <br />
        <label>Date: </label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        <label>Amount: </label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <label>CustomerName: </label>
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        <br />
        <label>Address: </label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <br />
        <label>MobileNumber: </label>
        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        <br />
        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
}

export default InvoiceForm;
