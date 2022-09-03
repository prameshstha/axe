import {
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, previousPage, setCurrentPage } from "../Slicer/dataSlice";
import { useGetProductsQuery } from "../api/apiSlice";

const PaginationComponent = ({}) => {
  const pageNumbers = [];
  const { data: products } = useGetProductsQuery();
  const dispatch = useDispatch();
  const allValue = useSelector((state) => state);
  const { currentPage, postsPerPage } = allValue.dataslic;
  const totalPosts = products && products.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const canNextPage = currentPage === pageNumbers.length ? false : true;
  const canPreviousPage = currentPage === 1 ? false : true;

  return (
    <>
      {/* paginagion buttions*/}
      <div className="pagination m-3">
        <div>
          <button
            className="pagination__buttons"
            onClick={() => dispatch(setCurrentPage(1))}
            disabled={!canPreviousPage}
          >
            <FaAngleDoubleLeft />
          </button>
          <button
            className="pagination__buttons"
            onClick={() => dispatch(previousPage())}
            disabled={!canPreviousPage}
          >
            <FaAngleLeft />
          </button>
          <span>
            Page{" "}
            <strong>
              {currentPage} of {pageNumbers.length}
            </strong>
          </span>
          <button
            className="pagination__buttons"
            onClick={() => dispatch(nextPage())}
            disabled={!canNextPage}
          >
            <FaAngleRight />
          </button>
          <button
            className="pagination__buttons"
            onClick={() => dispatch(setCurrentPage(pageNumbers.length))}
            disabled={!canNextPage}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
        <div className="page__border"></div>
        <span>
          Go to page:{" "}
          <input
            className="page__textbox"
            type="number"
            // value={currentPage > pageNumbers.length ? 1 : 1}
            onChange={(e) => {
              const page =
                e.target.value > 0 && e.target.value <= pageNumbers.length
                  ? Number(e.target.value)
                  : 1;
              dispatch(setCurrentPage(page));
            }}
          />
        </span>{" "}
      </div>
    </>
  );
};

export default PaginationComponent;
