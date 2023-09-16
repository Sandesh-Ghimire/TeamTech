import logo from './logo.svg';
import './App.css';
import { LoginReg } from './Components/LoginReg/LoginReg';
import { Space } from './Components/Space/Space';
import { User } from './Components/User/User';






function App() {
  return (
    <div>
      <LoginReg/>
      <Space/>
<User/>
      {/* <Location/> */}
{/* <DraggableMarker/> */}

    </div>
  );
}

export default App;
