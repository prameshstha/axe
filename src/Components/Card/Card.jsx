import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGetProductsQuery } from "../../api/apiSlice";
import CardSkeleton from "../Skeleton/CardSkeleton";
import Pagination from "../Pagination/Pagination";
import { setPostsPerPage, setCurrentPage } from "../../Slicer/dataSlice";

//reducer
import { useSelector, useDispatch } from "react-redux";
import PaginationComponent from "../../copy/PaginationComponent"; //alternate pagination style

const Card = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    // isError,
    error,
  } = useGetProductsQuery();
  const dispatch = useDispatch();
  const { currentPage, postsPerPage } = useSelector((state) => state.dataslic);

  // Get viewable products
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProducts =
    products && products.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="main__div border">
      <div className="container ">
        <div className="d-flex justify-content-between border-bottom m-4">
          <div>
            <h5>All Products</h5>
            <span>{isSuccess ? products.length : ""} Products</span>
          </div>
          <div className="">
            <br />
            <select
              className="post__per__page"
              value={postsPerPage}
              onChange={(e) => {
                dispatch(setPostsPerPage(Number(e.target.value)));
                dispatch(setCurrentPage(1));
              }}
            >
              {[8, 10, 15, 20, 30, 40, 50, 65, 80, 500, 1000, 1500, 2000].map(
                (pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize} per page
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <div></div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <div className="cards">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ) : (
          <>
            <div className="cards ">
              {currentProducts.map((item, index) => {
                return (
                  <div key={index} className="card " style={{ width: "18rem" }}>
                    <div className="card-body">
                      <div className=" d-flex justify-content-center">
                        <img
                          className="card-img-top image"
                          src={item.product_image}
                          alt={item.product_name}
                        />
                      </div>
                    </div>
                    <div className="card-footer border-top product_details">
                      <div className="product_description">
                        <span>{item.product_name} </span>
                        <br />
                        <span className=" text-secondary">
                          {item.description}
                        </span>
                        <br />
                        <strong>{item.price} </strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex flex-row-reverse mb-3">
              {" "}
              <Pagination />
              {/* <PaginationComponent /> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
