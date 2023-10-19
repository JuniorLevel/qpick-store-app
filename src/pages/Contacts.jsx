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
				<div className='flex justify-between'>
					<ContactsItem />
					<div>
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
						<img src='/images/phone.svg' alt='phone-icon' />
					</div>
					<a
						className='text-2xl font-semibold hover:text-orange-text'
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
