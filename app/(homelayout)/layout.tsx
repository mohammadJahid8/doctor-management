'use client';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/navbar';
import Whatsapp from '@/components/global/whatsapp';
import { useAppContext } from '@/lib/context';

const HomeLayout = ({ children }: any) => {
  const { user } = useAppContext();
  return (
    <div className=''>
      <Navbar />
      {children}
      <Footer />
      {user?.role !== 'admin'}
    </div>
  );
};

export default HomeLayout;
