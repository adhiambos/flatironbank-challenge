// component AddTransactionForm
import React, { useState } from 'react';

const AddTransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ description, category, amount: parseFloat(amount) });
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
      <input type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
