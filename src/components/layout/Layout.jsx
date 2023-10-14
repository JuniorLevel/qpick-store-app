import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col min-h-[100vh] max-w-[1110px] mx-auto px-2'>
			<Header />
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
