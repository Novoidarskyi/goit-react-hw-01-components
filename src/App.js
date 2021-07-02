import './App.css';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import statistical from 'data/statistical-data';
import friends from 'data/friends';
import transactions from 'data/transactions';

function App() {
  return (
    <div className="App">
      <Profile />
      <Statistics title="Upload stats" stats={statistical} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
