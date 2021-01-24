import { initializeClock } from './components/countdown'
import { chartOne } from './components/chart'

const App = () => {
  // Countdown Invoke
  const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('countdown', deadline);
  //
  // // Charts
  chartOne();
};

export default App;
