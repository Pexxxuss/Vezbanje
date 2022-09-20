import { Route } from 'react-router-dom';
import FiveDays from './components/pages/fiveDays/FiveDays';
import AirPolution from './components/pages/airPolution/AirPolution';
import Input from './components/pages/dayWeather/Input';
import Layout from './components/Layout/Layout';
import Welcome from './components/pages/Welcome';
function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/today">
        <Input />
      </Route>
      <Route path="/days">
        <FiveDays />
      </Route>
      <Route path="/polution">
        <AirPolution />
      </Route>
    </Layout>
  );
}

export default App;
