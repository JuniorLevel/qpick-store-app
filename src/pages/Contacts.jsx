import { BsFillTelephoneFill } from 'react-icons/bs';
import ContactsItem from '../components/contacts-item/ContactsItem';
import Layout from '../components/layout/Layout';
import SocialInst from '../components/ui/social/social-inst/SocialInst';
import SocialItem from '../components/ui/social/social-item/SocialItem';
import SocialTeleg from '../components/ui/social/social-teleg/SocialTeleg';
import SocialVk from '../components/ui/social/social-vk/SocialVk';
import SocialWhats from '../components/ui/social/social-whats/SocialWhats';
import Title from '../components/ui/title/Title';

const Contacts = () => {
	return (
		<Layout>
			<section>
				<Title title='Контакты' />
				<div className='sm-max:flex-col flex justify-between gap-5'>
					<ContactsItem />
					<div className='sm-max:hidden'>
						<SocialItem>
							<SocialWhats />
						</SocialItem>
						<SocialItem>
							<SocialVk />
						</SocialItem>
						<SocialItem>
							<SocialInst />
						</SocialItem>
						<SocialItem>
							<SocialTeleg />
						</SocialItem>
					</div>
				</div>
				<div className='flex gap-7 items-center'>
					<div>
						<BsFillTelephoneFill />
					</div>
					<a
						className='sm-max:text-[25px] text-2xl font-semibold hover:text-hover-color'
						href='tel:+79888888890'
					>
						+7 988 888 88 90
					</a>
				</div>
			</section>
		</Layout>
	);
};

export default Contacts;
