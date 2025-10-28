const data = [
  {
    id: 1,
    name: 'ab'
  },
  { id: 2, name: 'abcd' },
  { id: 3, name: 'qwerty' },
  { id: 4, name: 'asdf' },
  { id: 5, name: 'cccbhjj' },
  { id: 6, name: 'yjryh' },
  { id: 7, name: 'abyrtbycd' },
  { id: 8, name: 'abccdscd' },
  { id: 9, name: 'abccdvfdvd' },
  { id: 10, name: 'vvvvvv' },
  { id: 11, name: 'ffffff' },
  { id: 12, name: 'yyyyy' },
  { id: 13, name: 'abwercd' },
  { id: 14, name: 'abcd' },
  { id: 15, name: 'qwerty' },
  { id: 16, name: 'asdf' },
  { id: 17, name: 'cccbhjj' },
  { id: 18, name: 'yjryh' },
  { id: 19, name: 'abyrtbycd' },
  { id: 20, name: 'abccdscd' },
  { id: 21, name: 'abccdvfdvd' },
  { id: 22, name: 'vvvvvv' },
  { id: 23, name: 'ffffff' },
  { id: 24, name: 'yyyyy' },
  { id: 25, name: 'abwercd' },
  { id: 1, name: 'ab' },
  { id: 2, name: 'abcd' },
  { id: 3, name: 'qwerty' },
  { id: 4, name: 'asdf' },
  { id: 5, name: 'cccbhjj' },
  { id: 6, name: 'yjryh' },
  { id: 7, name: 'abyrtbycd' },
  { id: 8, name: 'abccdscd' },
  { id: 9, name: 'abccdvfdvd' },
  { id: 10, name: 'vvvvvv' },
  { id: 11, name: 'ffffff' },
  { id: 12, name: 'yyyyy' },
  { id: 13, name: 'abwercd' },
  { id: 14, name: 'abcd' },
  { id: 15, name: 'qwerty' },
  { id: 16, name: 'asdf' },
  { id: 17, name: 'cccbhjj' },
  { id: 18, name: 'yjryh' },
  { id: 19, name: 'abyrtbycd' },
  { id: 20, name: 'abccdscd' },
  { id: 21, name: 'abccdvfdvd' },
  { id: 22, name: 'vvvvvv' },
  { id: 23, name: 'ffffff' },
  { id: 24, name: 'yyyyy' },
  { id: 25, name: 'abwercd' }
];

const ITEMS_PER_PAGE = 3;

export const fetchInvoicesPages = (query) => {
  const filteredData = data.filter((element) => element.name.includes(query));
  return Math.ceil(filteredData.length / ITEMS_PER_PAGE);
};

const Table = ({ query, currentPage }) => {
  const currentPageItems = ITEMS_PER_PAGE * currentPage - ITEMS_PER_PAGE;

  const filteredData = data
    .filter((element) => element.name.includes(query))
    .filter((el, i) => i >= currentPageItems && i <= currentPageItems + 2);
  return (
    <div>
      {filteredData.map((element) => {
        return <div key={element.id}>{element.name}</div>;
      })}
    </div>
  );
};

export default Table;
