import { Provider } from 'react-redux';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import ApplicationDetails from './ApplicationDetails';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/details/:id' element={<ApplicationDetails></ApplicationDetails>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
