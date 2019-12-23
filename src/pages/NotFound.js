import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("../components/Navbar"));

export const NotFoundPage = () => (
  <div className="flex flex-col items-center">
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div>404 not Found.</div>;
    </Suspense>
  </div>
);

export default NotFoundPage;
