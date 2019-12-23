import React, { useEffect, useState } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import { getImages } from "../actions/image";
import { baseUrl } from "../App";

import Navbar from "../components/Navbar";
import Search from "../components/search/Search";
import WallpaperList from "../components/wallpaper/WallpaperList";

export const HomePage = props => {
  const [images, setImages] = useState([]);
  const [paginationData, setPaginationData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${baseUrl}/images?limit=15&page=0`);
      const images = data.data;
      setImages(images);
      setPaginationData({
        lastPage: data.last_page,
        currentPage: data.current_page
      });
      dispatch(getImages(images));
      return;
    };
    fetchData();
    return;
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center mx-auto">
      <Navbar />
      <Search navigate={props.navigate} />
      <WallpaperList
        images={images}
        setImages={setImages}
        pageChangeUrl={`${baseUrl}/images`}
        paginationData={paginationData}
      />
      <footer className="text-xl mt-10">
        Created by Matthew Yates, &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};
export default HomePage;
