import { FC } from 'react';

interface IYandexMapProps {
	src: string;
}

const YandexMap: FC<IYandexMapProps> = ({ src }): JSX.Element => {
	return (
		<div className='w-full h-full'>
			<iframe width='100%' height='100%' src={src}></iframe>
		</div>
	);
};
export default YandexMap;
