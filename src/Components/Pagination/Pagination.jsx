import "./Pagination.css";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, previousPage, setCurrentPage } from "../../Slicer/dataSlice";
import { useGetProductsQuery } from "../../api/apiSlice";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentProducts }) => {
  const pageNumbers = [];
  const { data: products } = useGetProductsQuery();
  const dispatch = useDispatch();
  const allValue = useSelector((state) => state);
  const { currentPage, postsPerPage } = allValue.dataslic;
  const totalPosts = products && products.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePageClick = (event) => {
    let currentPage = event.selected + 1;
    dispatch(setCurrentPage(currentPage));
  };

  return (
    <>
      <div className="m-4">
        <ReactPaginate
          previousLabel={"< Previous"}
          nextLabel={"Next >"}
          breakLabel={"..."}
          pageCount={pageNumbers.length}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center "}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link text-black"}
          previousLinkClassName={"page-link text-black"}
          nextLinkClassName={"page-link text-black"}
          breakLinkClassName={"page-link text-black"}
          activeClassName={"active-link"}
          forcePage={currentPage - 1}
        />
      </div>
    </>
  );
};

export default Pagination;
