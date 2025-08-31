import { BrowserRouter, Route } from "react-router-dom";
import { ROUTER_LIST } from "./treeRoutes/RouterList";
import NotFoundMiddleware from "./treeRoutes/notFoundMiddleware";
import { Toaster } from "react-hot-toast";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ className: "toastDefault" }}
      />
      <NotFoundMiddleware>
        <Route path={ROUTER_LIST.ROOT} element={<Home />} />
      </NotFoundMiddleware>
    </BrowserRouter>
  );
}

export default Router;
