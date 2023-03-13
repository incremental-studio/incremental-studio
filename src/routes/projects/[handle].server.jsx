import {useRouteParams} from '@shopify/hydrogen';
import Layout from '../../components/Layout.server';
import ProjectContent from '../../components/ProjectContent.server';

export default function Project() {
  const {handle} = useRouteParams();

  const content = data[handle];

  return <Layout>{content && <ProjectContent content={content} />}</Layout>;
}

const data = {
  bento: {
    title: 'Bento',
    description:
      'A simple dashboard that helps you stay focused. Your up-next meetings, latest emails, tasks from services like GitHub and Asana, and a simple notepad to jot your notes down.',
  },
  dossier: {
    title: 'Dossier',
    description:
      `Another personal website builder, made to meet some personal beliefs. They should be as easy to write/manage as Apple Notes. They should express personal style, without having to think about design. They should be stewards, not owners, of the data. They shouldn’t track me.`,
  },
  'office-hours': {
    title: 'Office Hours',
    description:
      'An alternative to other meeting-booking services that’s focused on simplicity, embracing constraints to keep your calendar a little more sane.',
  },
};
