import React from "react";
import AdminRoutes from "./utils/Routes/AdminRoutes";
import MarketingRoutes from "./utils/Routes/MarketingRoutes";

const App = () => {
  return (
    <>
      <AdminRoutes user={[]} isAutheticated={false} />
      <MarketingRoutes user={[]} isAutheticated={false} />
    </>
  );
};

export default App;
