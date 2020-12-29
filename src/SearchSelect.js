import Select from 'react-select';

import raw from './data';

const SearchSelect = ({ onChange, value }) => {
	const options = raw.map(({ title }) => ({ value: title, label: title }));

	return <Select options={options} setValue={onChange} placeholder='search...' type='text' value={value} />;
};

export default SearchSelect;
