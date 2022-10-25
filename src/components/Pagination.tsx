import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination";
import { ReactComponent as ChevronLeftIcon } from "../assets/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "../assets/chevron-right.svg";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (paginationRange === undefined) {
    return null;
  }

  console.log("this is pagination range", paginationRange);

  let lastPage = paginationRange[paginationRange.length - 1];

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <span className="page-picker">
      {/* Left navigation arrow */}
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? "disabled" : ""}`}
      >
        <ChevronLeftIcon />
      </button>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <span key={pageNumber}>&#8230;</span>;
        }

        // Render our Page Pills
        return (
          <span
            key={pageNumber}
            className={`${pageNumber === currentPage ? "highlight" : ""}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </span>
        );
      })}
      {/*  Right Navigation arrow */}
      <button
        onClick={onNext}
        disabled={currentPage === lastPage}
        className={`${currentPage === lastPage ? "disabled" : ""}`}
      >
        <ChevronRightIcon />
      </button>
    </span>
  );
};

export default Pagination;
