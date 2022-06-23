import Home from "./pages/Home/Home";
import Header from "./containers/Header/Header";
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
