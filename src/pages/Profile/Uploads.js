import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import ProfileNav from "./ProfileNav";
import { WallpaperList } from "../../components/wallpaper/WallpaperList";
import { getImages } from "../../actions/image";
import { baseUrl } from "../../App";

export const Uploads = props => {
  const [images, setImages] = useState([]);
  const [paginationData, setPaginationData] = useState({});

  const user = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${baseUrl}/images/uploads/${props.id}?limit=15&page=0`
      );
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
  }, [dispatch, props.id, user.id]);

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <ProfileNav uri={props.uri} id={props.id} />
      <WallpaperList
        images={images}
        setImages={setImages}
        pageChangeUrl={`${baseUrl}/images/uploads/${props.id}`}
        paginationData={paginationData}
      />
    </div>
  );
};

export default Uploads;
