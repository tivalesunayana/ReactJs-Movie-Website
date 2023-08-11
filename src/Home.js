import React from "react";
// import { AppContext } from "./context";
// import { useGlobalContext } from "./context";
import Search from "./Search";
import Movies from "./Movies";
const Home = () => {
  //   const children = useContext(AppContext);

  return (
    <div>
      <Search />
      <Movies />
    </div>
  );
};
export default Home;
