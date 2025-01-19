import { Suspense } from "react";
import { Outlet } from "react-router";

function LoadingProvider() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Outlet />
    </Suspense>
  );
}

export default LoadingProvider;
