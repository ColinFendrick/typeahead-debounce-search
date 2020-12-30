import {
	animated as a,
	useTransition,
	config
} from 'react-spring';

const AnimatedResults = ({ data }) => {

	const transitions = useTransition(data, (_, key) => key, {
		from: {
			opacity: 0,
			height: 0
		},
		enter: {
			opacity: 1,
			height: 'auto'
		},
		leave: {
			opacity: 0,
			height: 0
		},
		config: config.slow
	});

	return (
		<ul>
			{transitions.map(({ item, props, key }) =>
				<a.li key={key} style={props}>{item.title}</a.li>
			)}
		</ul>

	);
};


export default AnimatedResults;
