'use client';
import { Separator } from '@/components/ui/separator';
import { getReferralColumns } from './columns';
import { Heading } from './heading';
import { DataTable } from './data-table';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { useAppContext } from '@/lib/context';

export const Referral: React.FC<any> = () => {
  const { setOpenReferral, referrals } = useAppContext();
  console.log('🚀 ~ Referral ~ referrals:', referrals);
  return (
    <>
      <div className='flex sm:flex-row flex-col gap-4 items-start justify-between'>
        <Heading
          title={`Referral Codes (${referrals.length})`}
          description='Manage Referral Code'
        />

        <Button
          className='text-xs md:text-sm'
          onClick={() => setOpenReferral(true)}
        >
          <Plus className='mr-2 h-4 w-4' /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        viewSearchKey='by Referral Code'
        searchKey='code'
        columns={getReferralColumns()}
        data={referrals}
      />
    </>
  );
};
