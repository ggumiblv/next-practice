async function Page({ params }) {
  const { id } = params;

  return <div>Страница {id}</div>;
}

export default Page;
