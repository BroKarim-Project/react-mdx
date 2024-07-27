import { Suspense, lazy } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/home";
import { ContentLayout } from "./component/MDXComponent";
import MainNav from "./component/main-nav";
// import 3dBg from './assets/3d-bg.png '

const FirstContent = lazy(() => import("./content/one.mdx"));
const SecContent = lazy(() => import("./content/two.mdx"));

const routes = [
  { path: "first/", component: FirstContent },
  { path: "second/", component: SecContent },
];

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <MainNav />
          <Routes>
            <Route exact path="/" Component={Hero} />
            {routes.map(({ path, component: Component }, index) => {
              console.log(`Adding route for path: ${path}`);

              return <Route key={index} path={path} element={<Component components={ContentLayout} />} />;
            })}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
