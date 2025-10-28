import Link from 'next/link';

const AboutYou = () => {
  return (
    <div>
      <p>About you</p>
      <Link href="/about"> back </Link>
      <Link href="/about/you/1"> 1 page </Link>
      <Link href="/about/you/2"> 2 page</Link>
      <Link href="/about/you/3"> 3 page</Link>
      <Link href="/about/you/4"> 4 page </Link>
    </div>
  );
};

export default AboutYou;
