import Routers from "./Navigation/Routers";
import "..//src/scrollbarStyles.css";
import { useEffect, useState } from "react";
import MainLoader from "./Components/MainLoader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return <div>{loading ? <MainLoader /> : <Routers />}</div>;
}

export default App;
