import {Store} from './store/habit/store'
import {CompleteStore} from './store/complete/store'

import Top from './components/top'

function App() {
  return (
    <>
      <Store>
        <CompleteStore>
          <Top />
        </CompleteStore>
      </Store>
      <style jsx>
        {`
          
        `}
      </style>
    </>
  );
}

export default App;
