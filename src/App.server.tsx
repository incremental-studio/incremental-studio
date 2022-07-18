import React, { Suspense } from "react";
import renderHydrogen from "@shopify/hydrogen/entry-server";
import {
  Router,
  Route,
  FileRoutes,
  ShopifyProvider,
  Seo,
} from "@shopify/hydrogen";
import NotFound from "./components/NotFound.server";

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Seo type="page" data={seoData} />
        <Router>
          <FileRoutes />
          <Route path="*" page={<NotFound />} />
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

const seoData = {
  title: "Incremental Studio",
  description:
    "Works in progress. An independent product studio run by Benjamin Sehl.",
};

export default renderHydrogen(App);
