import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import Navbar from "../components/Navbar";
import Search from "../components/search/Search";
import WallpaperList from "../components/wallpaper/WallpaperList";

import { baseUrl } from "../App";

export const SearchPage = (props) => {
  const { search } = props.location;
  const [images, setImages] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const [tags, setTags] = useState([]);
  const searchFilters = useSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(
        `${baseUrl}/search/${search}&nsfw=${searchFilters.nsfw}&limit=15&page=0`
      );

      console.log(searchFilters.nsfw);
      const images = data.imgs.data;
      setImages(images);
      setPaginationData({
        lastPage: data.imgs.last_page,
        currentPage: data.imgs.current_page,
      });
      setTags(...data.tags);
    };
    fetchData();
  }, [props.location.search, search, searchFilters.nsfw]);

  return (
    <div className="wrapper">
      <Navbar />
      <div className="">
        <p className="text-4xl">{tags}</p>
        <Search navigate={props.navigate} />
      </div>
      <WallpaperList
        images={images}
        setImages={setImages}
        pageChangeUrl={`${baseUrl}/search/${search}`}
        paginationData={paginationData}
      />
    </div>
  );
};

export default SearchPage;
