import React from "react";
import { Link } from "@shopify/hydrogen";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Naptime</Link>
      </h1>
    </header>
  );
}
