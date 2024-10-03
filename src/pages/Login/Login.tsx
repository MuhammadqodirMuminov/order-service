import { useGetProductsQuery } from '@/store/products/features';

export const Login = () => {
	const { data, isFetching } = useGetProductsQuery();

	if (isFetching) return <div>Loading...</div>

	return (
		<div>
			{data?.products.map(p => (
				<h2>{p.title}</h2>
			))}
		</div>
	);
};
