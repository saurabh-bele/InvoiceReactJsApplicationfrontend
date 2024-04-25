
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/create-invoices/get-all-invoices')
      .then(response => {
        setInvoices(response.data);
      })
      .catch(error => {
        console.error('Error fetching invoices: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>{invoice.invoiceNumber} - {invoice.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
