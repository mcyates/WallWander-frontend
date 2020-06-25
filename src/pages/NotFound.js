import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("../components/Navbar"));

export const NotFoundPage = () => (
  <div className="wrapper">
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div>404 not Found.</div>;
    </Suspense>
  </div>
);

export default NotFoundPage;
