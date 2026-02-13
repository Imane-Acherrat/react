
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>

  );
}

export default App;
