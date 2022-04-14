import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import Profile from "./components/tuiter/profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="labs"
              element={<Labs />} />
            <Route path="hello"
              element={<HelloWorld />} />
            <Route path="tuiter"
              element={<Tuiter />}>
              <Route index
                element={<HomeScreen />} />
              <Route path="explore"
                element={<ExploreScreen />} />
              <Route path="profile"
                element={<Profile />}></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
