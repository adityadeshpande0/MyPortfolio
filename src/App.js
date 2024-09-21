import Routers from "./Navigation/Routers";
import "..//src/scrollbarStyles.css";
import { useEffect, useState } from "react";
import MainLoader from "./Components/MainLoader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <MainLoader /> : <Routers />}</div>;
}

export default App;
