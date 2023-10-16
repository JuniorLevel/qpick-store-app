import Accordion from './../components/accordion/Accordion';
import { accordionData } from './../components/accordion/accordion.data.js';
import Layout from './../components/layout/Layout';

const Services = () => {
	return (
		<Layout>
			<Accordion accordionData={accordionData} />
		</Layout>
	);
};

export default Services;
