import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';

import Results from './Results';
import SearchSelect from './SearchSelect';
import raw from './data';

const Search = () => {
	let res = raw;
	res = [...Array(50)].map((_, i) => raw[i % raw.length]);
	const [query, setQuery] = useState('');
	const [data, setData] = useState(res);
	const onChange = e =>
		setQuery(e.target.value);

	const onTypeaheadChange = e => setQuery(e.value);

	const updateQuery = () => {
		const search = res.filter(({ title }) => {
			// return title.toLowerCase().includes(query.toLowerCase());
			const queryArr = query.toLowerCase().split(' ');
			const titleArr = title.toLowerCase().split(' ');

			// return queryArr.map(queryEl => titleArr.find(titleEl => titleEl.includes(queryEl))).filter(e => e).length === queryArr.length;

			return queryArr.map(qEl => {
				const found = titleArr.findIndex(titleEl => titleEl.includes(qEl));
				titleArr.splice(found, 1);
				return found !== -1;
			}).filter(e => e).length === queryArr.length;
		});

		setData(search);
	};

	const delayedQuery = useCallback(debounce(updateQuery, 500), [query]);

	useEffect(() => {
		delayedQuery();

		return delayedQuery.cancel;
	}, [setQuery, delayedQuery]);

	return (
		<div>
			<div>
				<p>Type to search!</p>
				<input type='text' value={query} placeholder='search...' onChange={onChange} />
				<SearchSelect onChange={onTypeaheadChange} value={query} />
			</div>
			<div>
				<Results data={data} />
			</div>
		</div>
	);
};

export default Search;
