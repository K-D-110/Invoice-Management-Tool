const express = require('express');
const cors = require('cors');

const path = require('path');
const app = express();
const invoices = [
    {
    id: 'INV123',
    clientName: 'Client A',
    items: ['Item 1', 'Item 2'],
    quantities: [2, 3],
    prices: [10.0, 20.0],
    dueDate: '2023-09-30',
    date: '2023-09-15',
    totalAmount: 100.0,
    status: 'Paid',
  },
  {
    id: 'INV124',
    clientName: 'Client B',
    items: ['Item 3', 'Item 4'],
    quantities: [1, 2],
    prices: [15.0, 25.0],
    dueDate: '2023-10-10',
    date: '2023-09-20',
    totalAmount: 75.0,
    status: 'Unpaid',
  },
]

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Allow requests from any origin
app.use(cors());

app.get('/api/invoices', (req, res) => {
  res.json(invoices);
});

app.post('/api/sendinvoice', (req, res) => {
   const invoiceData = "cool brah I got it!";
    res.json({ message: 'Invoice received successfully', data: invoiceData });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Start the server on port 3001
const PORT =  3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
