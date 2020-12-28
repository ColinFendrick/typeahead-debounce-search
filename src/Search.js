import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';

import Results from './Results';
import raw from './data';

const Search = () => {
	const [query, setQuery] = useState('');
	const [data, setData] = useState(raw);
	const onChange = e => {
		setQuery(e.target.value);
	};

	const updateQuery = () => {
		const res = raw.filter(({ title }) => {
			const queryArr = query.toLowerCase().split(' ');
			const titleArr = title.toLowerCase().split(' ');

			const allQuerySubstringsFound = queryArr.map(queryEl => titleArr.find(titleEl => titleEl.includes(queryEl))).filter(e => e).length === queryArr.length;

			return allQuerySubstringsFound;
		});
		setData(res);
	};

	const delayedQuery = useCallback(debounce(updateQuery, 500), [query]);

	useEffect(() => {
		delayedQuery();

		// Cancel previous debounce calls during useEffect cleanup.
		return delayedQuery.cancel;
	}, [setQuery, delayedQuery]);

	return (
		<div>
			<div>
				<p>Type to search!</p>
				<input type='text' value={query} placeholder='search...' onChange={onChange} />
			</div>
			<h1>{query}</h1>
			<div>
				<Results data={data} />
			</div>
		</div>
	);
};

export default Search;
