import { animated as a } from 'react-spring';

const TopBar = ({ int }) => {
	const { outerH, innerH } = {
		outerH: int.interpolate(o => Math.max((o * 100), 30)),
		innerH: int.interpolate(o => `${Math.max((o * 100) - 10, 50)}%`)
	};

	return (
		<a.div
			className='width-100 flex flex-center top-nav'
			style={{ height: outerH }}>
			{[...Array(8)].map((_, i) =>
				<a.div
					key={i}
					className='top-square'
					style={{ height: innerH }}
				></a.div>
			)}
		</a.div>
	);
};

export default TopBar;
