import styles from "./index.module.scss"
import Header from "./Header/Header";
import Add from "./Add/Add";
import Name from "./Name/Name";
import History from "./History/History";
import Generator from "./Generator/Generator";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          <main>
              <Routes>
                <Route path="/" element={<Name />} />
                <Route path="/find" element={<Name />} />
                <Route path="/add" element={<Add />} />
                <Route path="/history" element={<History />} />
                <Route path="/generator" element={<Generator />} />
                <Route path="/faq" element={<Name />} />
              </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
