import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ROUTER_LIST } from "./treeRoutes/RouterList";
import NotFoundMiddleware from "./treeRoutes/NotFoundMiddleware";
import { Toaster } from "react-hot-toast";
const HomePageLazy = React.lazy(() => import("../pages/Home"));
import Lazy from "../pages/Lazy";
// import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ className: "toastDefault" }}
      />
      <NotFoundMiddleware>
        <Route
          path={ROUTER_LIST.ROOT}
          element={
            <Suspense fallback={<Lazy />}>
              <HomePageLazy />
            </Suspense>
          }
        />
      </NotFoundMiddleware>
    </BrowserRouter>
  );
}

export default Router;
