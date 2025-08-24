'use client';

import Header from '@/components/global/header';
import Loading from '@/components/global/loading';
import Sidebar from '@/components/global/sidebar';
import Whatsapp from '@/components/global/whatsapp';
import { useAppContext } from '@/lib/context';
import { redirect, usePathname } from 'next/navigation';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, user } = useAppContext();

  const path = usePathname();

  if (isLoading) {
    return <Loading size='lg' />;
  }

  if (!user?.email) {
    return redirect('/');
  }

  if (user?.role === 'admin' && path.includes('doctors-dashboard')) {
    return redirect('/admin-dashboard');
  }

  if (user?.role === 'doctor' && path.includes('admin-dashboard')) {
    return redirect('/doctors-dashboard');
  }

  if (user?.role === 'doctor' && !user?.referral?.isValid) {
    console.log({ user });
    return redirect('/activate-referral');
  }

  return (
    <div className='flex'>
      <Sidebar />
      <main className='w-full flex-1 overflow-hidden'>
        <Header />
        {children}
      </main>
      {user?.role !== 'admin'}
    </div>
  );
};

export default DashboardLayout;
