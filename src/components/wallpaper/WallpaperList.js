import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Thumb from "./Thumb";

import { useDispatch } from "react-redux";
import { getImages } from "../../actions/image";

export const WallpaperList = props => {
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
  console.log(images.length % 5);

  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-center items-center overflow-hidden mx-auto sm:w-3/4 sm:-mx-1">
        {images.map(image => {
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
          activeLinkClassName="pagination--active-link"
          breakClassName="pagination--break"
          breakLinkClassName="pagination--break-link"
          containerClassName="pagination"
          disabledClassName="pagination--disabled"
          nextClassName="pagination--next"
          nextLinkClassName="pagination--next-link"
          pageClassName="pagination--page"
          pageLinkClassName="pagination--page-link"
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

/* <StackGrid
				className="grid"
				itemComponent="div"
				appear={fadeDown.appear}
				monitorImagesLoaded={true}
				columnWidth={columnWidth}
			>
				{images.map((image) => {
					const urlArr = image.secureUrl.split('/');
					urlArr[6] = 'f_auto,h_450,w_500,c_limit';
					image.secureUrl = urlArr.join('/');
					return <Thumb image={image} key={image.id} />;
				})}
			</StackGrid> */
