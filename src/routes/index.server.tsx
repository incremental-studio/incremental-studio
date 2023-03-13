import React from 'react';
import {Link} from '@shopify/hydrogen';
import Layout from '../components/Layout.server';

export default function Home() {
  return (
    <Layout>
      <p>
        The side projects of{' '}
        <a href="https://sehl.ca">Benjamin&nbsp;Sehl</a>.
      </p>
      <p>Ideas I’m chipping away on:</p>
      <ul>
        <li>
          <Link to="/projects/dossier">Dossier</Link>: A personal web page
          builder
        </li>
        <li>
          <Link to="/projects/bento">Bento</Link>: A personal productivity tool
          and dashboard
        </li>
        <li>
          <Link to="/projects/office-hours">Office Hours</Link>: A calendar
          scheduling service
        </li>
      </ul>
      <p>
        Some of these projects might become proper services, others may never see 
        the light of day. The goal is just to build and learn, but find me on{` `}
        <a href="https://twitter.com/intent/follow?screen_name=benjaminsehl">Twitter</a>{` `}
        or <a href="https://bsky.app/profile/sehl.ca">Blue Sky</a> if you’re interested.
      </p>
    </Layout>
  );
}
