'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation'; //укажет пользователю, на какой странице он находится в данный момент
import { useDebouncedCallback } from 'use-debounce'; //Дебаунсинг — это практика, ограничивающая частоту срабатывания функции
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { fetchInvoicesPages } from '@/components/table';
import Pagination from '@/components/pagination';
import Table from '@/components/table';

const AboutUs = () => {
  const searchParams = useSearchParams(); //Позволяет получить доступ к параметрам текущего URL-адреса. Например, параметры поиска для этого URL-адреса /dashboard/invoices?page=1&query=pendingбудут выглядеть так: {page: '1', query: 'pending'}.
  const pathname = usePathname(); //вернет /about/us
  const { replace } = useRouter();

  const [currentPage, setCurrentPage] = useState(Number(searchParams?.get('page')) || 1);
  const totalPages = fetchInvoicesPages(searchParams.get('query')?.toString());

  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams); //URLSearchParams— это веб-API, предоставляющий вспомогательные методы для управления параметрами URL-запроса. Вместо создания сложного строкового литерала вы можете использовать его для получения строки параметров, например ?page=1&query=a, .
    params.set('page', '1');
    if (value) {
      //это поможет получить строку запроса
      params.set('query', value);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    setCurrentPage(Number(searchParams?.get('page')) || 1);
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-2">
      <p>About us</p>
      <Link href="/about"> back </Link>

      <input
        className="w-100"
        placeholder="search..."
        defaultValue={searchParams.get('query')?.toString()} //синхронизация url и поля ввода
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />

      <Table query={searchParams.get('query')?.toString()} currentPage={currentPage} />

      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default AboutUs;

// export default function Loading() {
//   return <Skeleton />;
// }

// import { RevenueChartSkeleton } from '@/app/ui/skeletons';

//  <Suspense fallback={<RevenueChartSkeleton />}>
//    <RevenueChart /> //пока не загрузится компонент будет отображаться <RevenueChartSkeleton />
//  </Suspense>;
