import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import ArrowUp from 'components/ui/arrow-up/ArrowUp';
import { FC, ReactElement } from 'react';

interface ILayoutProps {
	children: ReactElement;
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
