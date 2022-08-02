import Index from './Components/routes/Index';
import './App.css';
import { Provider } from 'react-redux';
import store from './App/Store';

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
