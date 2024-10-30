// import "./Product.css";

// const Products = ({ result }) => {
//   return (
//     <>
//       <section className="card-container">{result}</section>
//     </>
//   );
// };

// export default Products;


import React, { useState } from "react";
import "./Product.css";

const Products = ({ result }) => {
  const productsPerPage = 6; // 5 rows of 5 products per row
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(result.length / productsPerPage);

  // Determine products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = result.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  return (
    <>
      <section className="card-container">
        {currentProducts.map((product, index) => (
          <div className="card" key={index}>
            {product}
          </div>
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};
export default Products;

