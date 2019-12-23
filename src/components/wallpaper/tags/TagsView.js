import React from "react";
import { Link } from "@reach/router";

export const TagsView = props => {
  const { removeTag, submit, tags, tagText } = props;

  return (
    <div className="tags flex flex-col justify-between bg-gray-900 p-6 h-auto mb-8 rounded shadow">
      <h3>Tags</h3>

      <form
        className="tags-form flex justify-center self-center items-start w-full mb-4"
        onSubmit={submit}
        method="post"
      >
        <input
          className="w-40 h-12 py-2 px-1 text-black rounded rounded-r-none"
          name="tagText"
          type="text"
          value={tagText}
          placeholder="add tag"
          onChange={e => props.setTagText(e.target.value)}
        />
        <select
          defaultValue="false"
          onChange={e => props.setTagNsfw(e.target.value)}
          className="w-40 h-12 py-2 px-1 text-black rounded-l-none rounded-r-none cursor-pointer"
        >
          <option className="cursor-pointer" value="false">
            sfw
          </option>
          <option className="cursor-pointer" value="true">
            nsfw
          </option>
        </select>
        <button
          type="submit"
          className="h-12 px-1 py-2 rounded rounded-l-none bg-purple-900 hover:bg-purple-500"
        >
          Add
        </button>
      </form>

      <ul className="tags-list min-h-20 overflow-hidden">
        {tags.map(tag => {
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
              <button
                type="button"
                className="bg-red-400 hover:bg-red-600 p-2 rounded-l-none"
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
