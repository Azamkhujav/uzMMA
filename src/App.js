import './app.scss'
import Home from "./pages/Home/Home";
import Header from "./containers/Header/Header";
import About from "./pages/about";
import PageFour from "./pages/PageFour/PageFour";
import Documentation from "./pages/Documentation/Documentation";
import { BrowserRouter,Route ,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
