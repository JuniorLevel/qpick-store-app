import styles from './../Social.module.scss';

const SocialVk = () => {
	return (
		<a href='https://vk.com' target='_blank' rel='noreferrer'>
			<svg
				className={styles.icon}
				width='60px'
				height='60px'
				viewBox='0 0 48 48'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M27.55,35.19V28.55c4.46.68,5.87,4.19,8.71,6.64H43.5a29.36,29.36,0,0,0-7.9-10.47c2.6-3.58,5.36-6.95,6.71-12.06H35.73c-2.58,3.91-3.94,8.49-8.18,11.51V12.66H18l2.28,2.82,0,10.05c-3.7-.43-6.2-7.2-8.91-12.87H4.5C7,20.32,12.26,37.13,27.55,35.19Z' />
			</svg>
		</a>
	);
};

export default SocialVk;
