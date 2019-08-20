import React from 'react';

export const TagsView = (props) => {
	const { removeTag, submit, tags } = props;

	return (
		<div className="tags">
			<h3>Tags</h3>
			<form className="tags-form" onSubmit={submit} method="post">
				<input
					className="tags-form-input"
					name="tagText"
					type="text"
					placeholder="add tag"
					onChange={(e) => props.setTagText(e.target.value)}
				/>
				<select
					defaultValue="false"
					onChange={(e) => props.setTagNsfw(e.target.value)}
					className="tags-form-select"
				>
					<option className="tags-form-option" value="false">
						sfw
					</option>
					<option className="tags-form-option" value="true">
						nsfw
					</option>
				</select>
				<button className="btn-tags-form">Add</button>
			</form>
			<ul className="tags-list">
				{tags.map((tag) => {
					let tagClass = `tags-tag tags-tag-${tag.nsfw}`;

					return (
						<li className={tagClass} key={tag.id}>
							<p className="tags-tag-data">{tag.tag}</p>
							<button
								className="btn-tags-danger"
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
