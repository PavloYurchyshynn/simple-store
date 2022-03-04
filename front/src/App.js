import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductListPageContainer from './components/ProductListPage/ProductListPageContainer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/:id' element={<ProductListPageContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
