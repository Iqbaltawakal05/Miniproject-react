import { useRoutes } from "react-router-dom";

import { routeList } from "./Route/Routes";

const App = () => {
  const element = useRoutes(routeList);

  return element;
};

export default App;
