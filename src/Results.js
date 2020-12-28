const Results = ({ data }) => <ul>
	{data.map(({ title }, i) => <li key={i}>{title}</li>)}
</ul>;


export default Results;
