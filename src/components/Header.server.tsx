import React from "react";
import { Link } from "@shopify/hydrogen";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Incremental Studio</Link>
      </h1>
    </header>
  );
}
