import React from "react";
import { Link } from "@shopify/hydrogen";
import Layout from "../components/Layout.server";

const projects = [
  {
    name: "Dossier",
    description: "A personal web page builder",
    handle: "dossier",
  },
  {
    name: "Bento",
    description: "A personal productivity tool and dashboard",
    handle: "bento",
  },
  {
    name: "Office Hours",
    description: "A calendar scheduling service",
    handle: "office-hours",
  },
  {
    name: "Carbon",
    description: "A component library for ecommerce sites",
    handle: "carbon",
  },
];

export default function Home() {
  return (
    <Layout>
      <p>
        The side projects of <a href="https://sehl.ca">Benjamin&nbsp;Sehl</a>.
      </p>
      <p>Ideas I’m chipping away on:</p>
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
        see the light of day. The goal is just to build and learn, but find me
        on{` `}
        <a href="https://twitter.com/intent/follow?screen_name=benjaminsehl">
          Twitter
        </a>
        {` `}
        or <a href="https://bsky.app/profile/sehl.ca">Blue Sky</a> if you’re
        interested.
      </p>
    </Layout>
  );
}
