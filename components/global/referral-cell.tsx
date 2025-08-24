'use client';

import { Button } from '@/components/ui/button';

import { Copy, Trash } from 'lucide-react';

import { useAppContext } from '@/lib/context';
import api from '@/utils/axiosInstance';
import { toast } from 'sonner';

export const ReferralCell: React.FC<any> = ({ data }) => {
  const { referralsRefetch, setReferralsRefetch } = useAppContext();

  const handleDelete = async (id: any) => {
    try {
      const promise = await api.delete(`/referral/${id}`);
      if (promise.status === 200) {
        setReferralsRefetch(!referralsRefetch);

        toast.success(`Referral Code deleted Successfully!`, {
          position: 'top-center',
        });
      }
    } catch (error) {
      toast.error(`Error deleting Referral Code!`, {
        position: 'top-center',
      });
      console.error('Submission error:', error);
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='outline'
        size='sm'
        className='h-7 text-xs'
        onClick={() => {
          navigator.clipboard.writeText(data.code);
          toast.success('Copied to clipboard', {
            position: 'top-center',
          });
        }}
      >
        <Copy className='h-4 w-4 mr-2' /> Copy
      </Button>

      <Button
        variant='destructive'
        size='sm'
        className='h-7 text-xs'
        onClick={() => handleDelete(data._id)}
      >
        <Trash className='mr-2 h-4 w-4' /> Delete
      </Button>
    </div>
  );
};
