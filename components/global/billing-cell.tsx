'use client';

import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import api from '@/utils/axiosInstance';
import { useAppContext } from '@/lib/context';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF';

export const BillingCell: React.FC<any> = ({ data }) => {
  const router = useRouter();

  const { billingRefetch, setBillingRefetch, user } = useAppContext();

  // const handleGenerateInvoice = async (id: any) => {
  //   try {
  //     const promise = await api.post(`/billing/generate-invoice`, data);
  //     console.log(promise.data);
  //     if (promise.status === 200) {
  //       setBillingRefetch(!billingRefetch);
  //       toast.success(`Invoice generated Successfully!`, {
  //         position: "top-center",
  //       });
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //     if (error.status === 400) {
  //       toast.error(`Contact number be a valid number!`, {
  //         position: "top-center",
  //       });
  //     }
  //   }
  // };

  const handleViewInvoice = (id: any) => {
    globalThis.open?.(`/invoice/${id}`, '_blank')?.focus();
  };

  const handleDelete = async (id: any) => {
    try {
      const promise = await api.delete(`/billing/delete/${id}`);
      if (promise.status === 200) {
        setBillingRefetch(!billingRefetch);
        toast.success(`Billing deleted Successfully!`, {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className='flex gap-2'>
      <PDFDownloadLink
        document={
          <InvoicePDF
            invoice={data}
            imageUrl={data?.doctor?.image}
            gstin={user?.gstin}
          />
        }
        fileName={`invoice-${data._id}.pdf`}
      >
        <Button
          variant='outline'
          size='sm'
          className='h-7 text-xs'
          // onClick={() => handleViewInvoice(data._id)}
        >
          View Invoice
        </Button>
      </PDFDownloadLink>

      <Button
        variant={'destructive'}
        color='red'
        size='sm'
        className='h-7 text-xs'
        onClick={() => handleDelete(data._id)}
      >
        <Trash className='mr-2 h-4 w-4' /> Delete
      </Button>
    </div>
  );
};
