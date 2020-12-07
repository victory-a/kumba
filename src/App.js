import React, { lazy, Suspense } from "react";
import ToggleCartProvider from "contexts/ToggleCart";
import { FullPageSpinner } from "components/loaders.js";
import CartProvider from "contexts/Cart/CartContext";
import ErrorBoundary from "components/errorBoundary";

const ProductGrid = lazy(() => import("./components/grid"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<FullPageSpinner />}>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
