
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Details';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
