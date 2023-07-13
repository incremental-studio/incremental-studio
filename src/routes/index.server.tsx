import React from "react";
import { Link } from "@shopify/hydrogen";
import Layout from "../components/Layout.server";

const projects = [
  {
    name: "Dossier",
    description: "A personal web page builder",
    status: "Building",
    handle: "dossier",
  },
  {
    name: "Bento",
    description: "A personal productivity tool and dashboard",
    status: "Designing",
    handle: "bento",
  },
  {
    name: "Office Hours",
    description: "A calendar scheduling service",
    status: "Designing",
    handle: "office-hours",
  },
  {
    name: "Carbon",
    description: "A component library for ecommerce sites",
    status: "Building",
    handle: "carbon",
  },
];

export default function Home() {
  return (
    <Layout>
      <p>
        Ideas <a href="https://sehl.ca">I’m</a> chipping away on while my kids
        are napping:
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.handle}>
            <Link to={`/projects/${project.handle}`}>{project.name}</Link>:{" "}
            {project.description}
          </li>
        ))}
      </ul>
      <p>
        Some of these projects might become proper services, others may never
        see the light of day. I’m just working on them for the fun of building and
        leaning.
      </p>
    </Layout>
  );
}
