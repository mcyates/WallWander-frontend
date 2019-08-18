import React from 'react';

export const TagsView = (props) => {
	const { removeTag, submit, tags } = props;

	return (
		<div className="tags--box">
			<h3>Tags</h3>
			<form className="tag--form" onSubmit={submit} method="post">
				<input
					className="tag--form-input"
					name="tagText"
					type="text"
					placeholder="add tag"
					onChange={(e) => props.setTagText(e.target.value)}
				/>
				<select
					defaultValue="false"
					onChange={(e) => props.setTagNsfw(e.target.value)}
					className="tag--form-select"
				>
					<option value="false">sfw</option>
					<option value="true">nsfw</option>
				</select>
				<button className="btn-tag--form">Add</button>
			</form>
			<ul className="taglist">
				{tags.map((tag) => {
					let tagClass = `tag tag-${tag.nsfw}`;

					return (
						<li className={tagClass} key={tag.id}>
							{tag.tag}
							<button
								className="btn-tag--danger"
								onClick={() => removeTag(tag.tag)}
							>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TagsView;
// (e) => props.setTagNsfw(e.target.value)
