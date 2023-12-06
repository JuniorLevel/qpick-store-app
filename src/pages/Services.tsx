import { FC } from 'react';
import Accordion from '../components/accordion/Accordion.js';
import { accordionData } from '../components/accordion/accordion.data.ts';
import Layout from '../components/layout/Layout.tsx';
import Title from '../components/ui/title/Title.tsx';
const Services: FC = (): JSX.Element => {
	return (
		<Layout>
			<Title title='Условия сервиса' />
			<Accordion accordionData={accordionData} />
		</Layout>
	);
};

export default Services;
