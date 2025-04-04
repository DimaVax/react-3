import './App.css';
import userData from './components/Profile/user.json';
import { Profile } from './components/Profile/Profile';

import statsData from './components/Stats/stats.json';
import { Stats } from './components/Stats/Stats.jsx';

import friendListData from './components/FriendList/friendList.json';
import { FriendList } from './components/FriendList/FriendList.jsx';

import table from './components/Transaction/table.json'
import { Transaction } from './components/Transaction/Transaction';


function App() {
  return (
    <div className="App">
      <Profile userData={userData} />
      <Stats statsData={statsData} />
      <FriendList friendListData={friendListData} />
      <Transaction tableStats={table}/>
    </div>
  );
}

export default App;
