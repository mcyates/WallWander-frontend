import React from 'react';

export const TagsView = (props) => {
	const { tags } = props;

	return (
		<div className="tags--box">
			<h3>Tags</h3>
			<ul className="taglist">
				<li>lorem tagsum</li>
			</ul>
		</div>
	);
};

export default TagsView;
