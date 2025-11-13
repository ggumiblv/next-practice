import AboutUsContent from '@/components/about-us-content';

import { Suspense } from 'react';

const AboutUs = () => {
  return (
    <Suspense fallback={null}>
      <AboutUsContent />
    </Suspense>
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
