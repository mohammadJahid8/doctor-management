import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Label } from '../ui/label';

import { useState } from 'react';
import api from '@/utils/axiosInstance';
import { useAppContext } from '@/lib/context';
import { toast } from 'sonner';
import { Input } from '../ui/input';

export function AddReferralModal() {
  const [loading, setLoading] = useState(false);
  const {
    openReferral,
    setOpenReferral,
    referralsRefetch,
    setReferralsRefetch,
  } = useAppContext();

  const [inputs, setInputs] = useState<any>({
    doctorName: '',
    email: '',
    validUntil: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      doctorName: inputs.doctorName || '',
      email: inputs.email || '',
      validUntil: inputs.validUntil || '',
      price: inputs.price || '',
    };

    try {
      const promise = await api.post(`/referral`, payload);
      if (promise.status === 200) {
        setOpenReferral(false);
        setReferralsRefetch(!referralsRefetch);
        setLoading(false);
        toast.success(`New Referral Code added.`, {
          position: 'top-center',
        });
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      return toast.error(
        error.response.data.message || `Failed to add new Referral Code!`,
        {
          position: 'top-center',
        }
      );
    }
  };

  return (
    <Dialog open={openReferral} onOpenChange={setOpenReferral}>
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <DialogTitle>Add new Referral Code</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='grid gap-4 py-4'>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='doctorName' className=''>
              Doctor Name
            </Label>
            <Input
              id='doctorName'
              className=''
              onChange={(e) =>
                setInputs({ ...inputs, doctorName: e.target.value })
              }
              disabled={loading}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='email' className=''>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              className=''
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              required
              disabled={loading}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='price' className=''>
              Price
            </Label>
            <Input
              id='price'
              type='number'
              className=''
              onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
              required
              disabled={loading}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label htmlFor='validUntil' className=''>
              Valid Until
            </Label>
            <Input
              id='validUntil'
              type='date'
              className=''
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) =>
                setInputs({ ...inputs, validUntil: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>

          <DialogFooter>
            <Button disabled={loading} type='submit'>
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
