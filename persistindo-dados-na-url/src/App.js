import List from './List';

import { LIST_HEADERS, PERSONAL_DATA_LIST } from './data';

function App() {
  return (
    <div className="App">
      <List headers={LIST_HEADERS} data={PERSONAL_DATA_LIST} />
    </div>
  );
}

export default App;
