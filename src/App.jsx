import { Suspense, lazy } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/home";
import { MDXComponent } from "./component/MDXComponent";

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
        <Suspense fallback={<div className="w-full flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route exact path="/" Component={Hero} />
            {routes.map(({ path, component: Component }, index) => {
              console.log(`Adding route for path: ${path}`);

              return <Route key={index} path={path} element={<Component components={MDXComponent} />} />;
            })}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
