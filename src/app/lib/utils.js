export const generatePagination = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    //если страниц меньше 7, то вывести все страницы
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    //если текущая страница среди первых трех
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    //если текущая страница среди последних трех
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};
