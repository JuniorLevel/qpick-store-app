import Accordion from 'components/accordion/Accordion';
import { accordionData } from 'components/accordion/accordion.data.ts';
import Layout from 'components/layout/Layout';
import Title from 'components/ui/title/Title';
import { FC } from 'react';
const Services: FC = (): JSX.Element => {
  return (
    <Layout>
      <Title title="Условия сервиса" />
      <Accordion accordionData={accordionData} />
    </Layout>
  );
};

export default Services;
