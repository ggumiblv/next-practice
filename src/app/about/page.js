import Link from 'next/link';
import { lusitana } from '../layout';

import './page.css';

const AboutPage = () => {
  return (
    <div className={`${lusitana.className} flex flex-col`}>
      <p>about</p>
      <button className="but">click</button>
      <Link href="/about/you">About you</Link>
      {/* Link позволяет осуществлять навигацию на стороне клиента без полного обновления */}

      <Link href="/about/us">About us</Link>
    </div>
  );
};

export default AboutPage;
