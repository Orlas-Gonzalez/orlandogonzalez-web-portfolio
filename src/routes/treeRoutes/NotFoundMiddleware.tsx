import { Routes, Route } from "react-router-dom";
import { ROUTER_LIST } from "./RouterList";
import { RouterProps } from "./types";
import NotFound from "../../pages/NotFound";

function NotFoundMiddleware({ children }: RouterProps) {
  return (
    <Routes>
      {children}
      <Route path={ROUTER_LIST.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default NotFoundMiddleware;
