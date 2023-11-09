import logo from './logo.svg';
import './App.css';
import { ConsignmentDetails } from './components/consignmentDeatils/consignmentDetails';
import { DocketDetails } from './components/docketDetails/docketDetails';

function App() {
  return (
    <div className="App">
       <ConsignmentDetails/>
       <DocketDetails/>
    </div>
  );
}

export default App;
