
import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import AddTransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import '../App.css';

const initialTransactions = [
  //Transactions array
  {
      id: 1,
      date: "2024-02-01",
      description: "Cheque from tenant",
      category: "Rent",
      amount: 20000
    },
    {
      id: 2,
      date: "2024-03-01",
      description: "Uber ride",
      category: "Transport",
      amount: 1055
    },
    {
      id: 3,
      date: "2024-02-02",
      description: "Glovo delivery",
      category: "Food",
      amount: 1500
    },
    {
      id: 4,
      date: "2024-02-04",
      description: "Sneakers",
      category: "Fashion",
      amount: 4000
    },
    {
      id: 5,
      date: "2024-02-06",
      description: "Massage",
      category: "Spa",
      amount: 3500
    },
    {
      id: 6,
      date: "2024-02-06",
      description: "Birthday cake",
      category: "Gift",
      amount: 2800
    },
    {
      id: 7,
      date: "2024-02-07",
      description: "Visit home",
      category: "Travel",
      amount: 6000
    },
    {
      id: 8,
      date: "2024-02-09",
      description: "Harry Potter series",
      category: "Books",
      amount: 11000
    },
    {
      id: 9,
      date: "2024-02-11",
      description: "Cinemax tickets",
      category: "Entertainment",
      amount: 1100
    },
    
    {
      id: 10,
      date: "2024-02-26",
      description: "Moringa payment",
      category: "Fees",
      amount: 53000
    }
 
];

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: transactions.length + 1 }]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchBar onSearch={handleSearch} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ flex: 1 }}>
          <TransactionTable transactions={filteredTransactions} />
        </div>
        <div style={{ flex: 1 }}>
          <AddTransactionForm onAddTransaction={handleAddTransaction} />
        </div>
      </div>
    </div>
 );
}

export default App;
