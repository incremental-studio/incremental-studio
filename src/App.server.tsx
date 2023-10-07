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
  title: "Naptime Work",
  description:
    "Ideas I’m chipping away on while my kids are napping.",
};

export default renderHydrogen(App);
