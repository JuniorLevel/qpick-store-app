import axios from 'axios';

export const getAllProducts = async () => {
	const response = await axios.get('https://api.escuelajs.co/api/v1/products');
	return response.data.slice(0, 50);
};
