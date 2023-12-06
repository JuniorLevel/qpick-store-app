import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ArrowUp from '../ui/arrow-up/ArrowUp';

interface ILayoutProps {
	children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
	return (
		<div className='flex flex-col min-h-[100vh] max-w-[1110px] mx-auto px-2'>
			<Header />
			<main className='flex-1'>{children}</main>
			<ArrowUp />
			{window.location.pathname !== '/' && <Footer />}
		</div>
	);
};

export default Layout;