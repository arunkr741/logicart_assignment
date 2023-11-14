import logo from "./logo.svg";
import "./App.css";
import { ConsignmentDetails } from "./components/consignmentDeatils/consignmentDetails";
import { DocketDetails } from "./components/docketDetails/docketDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<ConsignmentDetails />} />
            <Route path="/docket_details" element={<DocketDetails />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
