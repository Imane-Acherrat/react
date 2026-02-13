import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/details/:id' element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
