import React from "react";
import { Link } from "@reach/router";

export const TagsView = (props) => {
  const { removeTag, submit, tags, tagText } = props;

  return (
    <div className="tags">
      <h3>Tags</h3>

      <form className="tags-form" onSubmit={submit} method="post">
        <input
          className="tags-form-input"
          name="tagText"
          type="text"
          value={tagText}
          placeholder="add tag"
          onChange={(e) => props.setTagText(e.target.value)}
        />
        <select
          defaultValue="false"
          onChange={(e) => props.setTagNsfw(e.target.value)}
          className="tags-form-select"
        >
          <option className="tags-form-select-option" value="false">
            sfw
          </option>
          <option className="tags-form-select-option" value="true">
            nsfw
          </option>
        </select>
        <button type="submit" className="tags-form-button">
          Add
        </button>
      </form>

      <ul className="tags-list">
        {tags.map((tag) => {
          return (
            <li
              className={`tags-tag tags-tag-${tag.nsfw ? "nsfw" : "sfw"}`}
              key={tag.id}
            >
              <Link to={`/wallpapers/search/?tags=${tag.tag}`}>
                <p className="tags-tag-data hover:bg-purple-700  p-2">
                  {tag.tag}
                </p>
              </Link>
              <button type="button" onClick={() => removeTag(tag.tag)}>
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
