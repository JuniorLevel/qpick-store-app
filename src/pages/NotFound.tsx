import Layout from 'components/layout/Layout';
import NotFoundItem from 'components/notFound-item/NotFoundItem';
import { FC } from 'react';
const NotFound: FC = (): JSX.Element => {
  return (
    <Layout>
      <NotFoundItem />
    </Layout>
  );
};

export default NotFound;
