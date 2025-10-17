import Link from 'next/link';
import React from 'react';

const PaginationArrow = ({ href, direction, isDisabled }) => {
  const side = direction === 'left' ? 'туда' : 'сюда';
  return isDisabled ? (
    <div className="button">{side}</div>
  ) : (
    <Link className="button" href={href}>
      {side}
    </Link>
  );
};

export default PaginationArrow;
