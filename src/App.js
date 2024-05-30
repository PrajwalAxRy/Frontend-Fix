import { Provider } from "react-redux";
import Layout from "./components/Layout";
import store from "./components/store";




function App() {
  return (
    <div className="App">
        <Provider store={store}>
    <Layout />
  </Provider>,
    </div>
  );
}

export default App;
