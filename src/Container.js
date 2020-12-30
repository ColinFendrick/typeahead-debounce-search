import { useSpring } from 'react-spring';

import Search from './Search';
import TopBar from './TopBar';


const Container = () => {
	const [props, set] = useSpring(() => ({ int: 1 }));

	const onScroll = e =>
		set({ int: Math.max((1 - e.target.scrollTop / 300), 0) });

	return (
		<div className='container'>
			<TopBar int={props.int} />
			<div className='scroller' onScroll={onScroll}>
				<Search />
			</div>
		</div>
	);
};


export default Container;
