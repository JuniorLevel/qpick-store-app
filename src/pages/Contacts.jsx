import Layout from '../components/layout/Layout';
import SocialInst from '../components/ui/social/social-inst/SocialInst';
import SocialItem from '../components/ui/social/social-item/SocialItem';
import SocialTeleg from '../components/ui/social/social-teleg/SocialTeleg';
import SocialVk from '../components/ui/social/social-vk/SocialVk';
import SocialWhats from '../components/ui/social/social-whats/SocialWhats';

const Contacts = () => {
	return (
		<Layout>
			<section>
				<div className='flex justify-between'>
					<div className='w-[860px] rounded-[30px] shadow-shadow bg-white-bg p-4 mb-10'>
						<h1 className='text-[17px] font-semibold mb-3'>Наш офис</h1>
						<div className='rounded=[10px] mb-3'>
							<a
								href='https://yandex.ru/maps/-/CDa6eY0d'
								target='_blank'
								rel='noreferrer'
							>
								<img className='w-full' src='/images/map2.png' alt='map2.png' />
							</a>
						</div>
						<div className='flex gap-3 items-center'>
							<div className='my-auto'>
								<img src='/images/location.svg' alt='location-icon' />
							</div>
							<div className='flex flex-col'>
								<p className='font-medium text-[15px]'>
									Аксай-3а, 62ф, Алматы, Казахстан
								</p>
								<span className='text-title-color text-[13px] font-medium'>
									3 этаж 35 кабинет
								</span>
							</div>
						</div>
					</div>
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
