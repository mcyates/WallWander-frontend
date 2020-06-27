import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Thumb from "./Thumb";

import { useDispatch } from "react-redux";
import { getImages } from "../../actions/image";

export const WallpaperList = (props) => {
  const { images, setImages, pageChangeUrl, paginationData } = props;
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setPageCount(paginationData.lastPage);
    return;
  }, [paginationData.lastPage]);

  const pageChange = async ({ selected }) => {
    const { data } = await axios.get(
      `${pageChangeUrl}?limit=15&page=${selected}`
    );
    const images = data.data;

    dispatch(getImages(images));
    setImages(images);
    setPageCount(data.last_page);
    return;
  };

  const columnWidth = window.innerWidth - 27 <= 700 ? 250 : 500;

  return (
    <React.Fragment>
      <div className="wallpaperslist">
        {images.map((image) => {
          const urlArr = image.secureUrl.split("/");
          urlArr[6] = "f_auto,h_450,w_500,c_limit";
          image.secureUrl = urlArr.join("/");
          return <Thumb image={image} key={image.id} />;
        })}
      </div>

      {pageCount > 1 ? (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={columnWidth <= 700 ? 2 : 3}
          marginPagesDisplayed={1}
          onPageChange={pageChange}
          activeClassName="pagination--active"
          activeLinkClassName="pagination--active-link text-purple-600 border-b border-purple-600"
          breakClassName="pagination--break"
          breakLinkClassName="pagination--break-link"
          containerClassName="pagination text-4xl"
          disabledClassName="pagination--disabled invisible"
          nextClassName="pagination--next"
          nextLinkClassName="pagination--next-link"
          pageClassName="pagination--page mx-4 "
          pageLinkClassName="pagination--page-link hover:text-purple-600"
          previousClassName="pagination--previous"
          previousLinkClassName="pagination--previous-link"
        />
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  );
};

export default WallpaperList;
