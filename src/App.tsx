import './styles/GlobalStyles.css';

import { Tag } from './components/Tag/index';
import { Box } from './components/Box/index';

function App() {
  return (
    <div className="main">
      <Box>
        <Tag text="color" deleted={false} />
        <Tag text="color" deleted={false} />
        <Tag text="color" deleted={false} />
        <Tag text="color" deleted={false} />
      </Box>
    </div>
  );
}

export default App;
