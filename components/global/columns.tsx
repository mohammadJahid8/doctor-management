'use client';

import { ColumnDef } from '@tanstack/react-table';
import { AppointmentCellAction } from './appointment-cell-action';
import { DoctorsCellAction } from './doctors-cell-action';
import { ArticleCell } from './article-cell';
import { Avatar, AvatarImage } from '../ui/avatar';
import { BillingCell } from './billing-cell';
import { standardPackages } from '@/utils/constants';
import { ReviewCell } from './review-cell';
import { AdCell } from './ad-cell';
import { Button } from '../ui/button';
import { Copy } from 'lucide-react';
import { format } from 'date-fns';
import { ReferralCell } from './referral-cell';

export const getAppointmentColumns = (userRole: string): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      id: 'slNo',
      header: 'SL No',
      cell: ({ row }) => row.original?.serialNumber,
    },
    {
      accessorKey: 'doctorName',
      header: 'DOCTOR NAME',
    },
    {
      accessorKey: 'patientName',
      header: 'PATIENT NAME',
    },
    {
      accessorKey: 'phone',
      header: 'PHONE',
    },
    {
      accessorKey: 'nextAppointmentDate',
      header: 'NEXT APPOINTMENT DATE',
      // cell: ({ row }) => {
      //   const nextAppointmentDate = row.original.nextAppointmentDate;
      //   return <p>{format(nextAppointmentDate, "PPP")}</p>;
      // },
    },
    {
      accessorKey: 'fee',
      header: 'FEE',
    },
    {
      header: 'ACTIONS',
      id: 'actions',
      cell: ({ row }: any) => <AppointmentCellAction data={row.original} />,
    },
  ];

  if (userRole === 'admin') {
    columns.splice(columns.length - 1, 0, {
      accessorKey: 'doctor.name',
      header: "DOCTOR'S NAME",
    });
  }

  return columns;
};

export const getDoctorsColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'image',
      header: 'IMAGE',
      cell: ({ row }) => {
        const image = row.original?.image ?? '';
        return (
          <Avatar className='h-8 w-8'>
            <AvatarImage src={image} alt={'image'} />
          </Avatar>
        );
      },
    },
    {
      accessorKey: 'hospitalName',
      header: 'HOSPITAL',
    },
    {
      // Changed: Added unique id for city
      id: 'city',
      accessorKey: 'hospitalAddress',
      header: 'CITY',
      cell: ({ row }) => {
        const city = row.original?.hospitalAddress?.city ?? '';
        return <p>{city}</p>;
      },
    },
    {
      // Changed: Added unique id for state
      id: 'state',
      accessorKey: 'hospitalAddress',
      header: 'STATE',
      cell: ({ row }) => {
        const state = row.original?.hospitalAddress?.state ?? '';
        return <p>{state}</p>;
      },
    },

    {
      accessorKey: 'doctorName',
      header: 'DOCTORS NAME',
      cell: ({ row }) => {
        const doctorName = row.original?.doctorName ?? row.original?.name ?? '';
        return <p>{doctorName}</p>;
      },
    },

    {
      accessorKey: 'speciality',
      header: 'SPECIALITY',
    },
    {
      accessorKey: 'phone',
      header: 'PHONE',
    },
    {
      accessorKey: 'email',
      header: 'EMAIL',
    },

    // {
    //   header: "Status",
    //   cell: ({ row }: any) => (
    //     <p>
    //       {row.original?.subscription?.planId
    //         ? standardPackages.find(
    //             (item: any) =>
    //               item.planId === row.original?.subscription?.planId
    //           )?.type
    //         : "Not Subscribed"}
    //     </p>
    //   ),
    // },

    {
      header: 'ACTION',
      id: 'actions',
      cell: ({ row }: any) => <DoctorsCellAction data={row.original ?? {}} />,
    },
  ];

  return columns;
};
export const getArticleColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'image',
      header: 'IMAGE',
      cell: ({ row }) => {
        const image = row.original.image;
        return (
          <img src={image} alt='image' className='w-16 h-1w-16 rounded-sm' />
        );
      },
    },
    {
      accessorKey: 'title',
      header: 'TITLE',
      cell: ({ row }) => {
        const title = row.original.title;
        return <p>{title?.slice(0, 50)}</p>;
      },
    },

    {
      header: 'ACTION',
      id: 'actions',
      cell: ({ row }: any) => <ArticleCell data={row.original} />,
    },
  ];

  return columns;
};

export const getReviewColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'image',
      header: 'IMAGE',
      cell: ({ row }) => {
        const image = row.original.image;
        return (
          <Avatar className='h-8 w-8'>
            <AvatarImage src={image} alt={'image'} />
          </Avatar>
        );
      },
    },
    {
      accessorKey: 'name',
      header: 'NAME',
    },
    {
      accessorKey: 'rating',
      header: 'RATING',
    },
    {
      accessorKey: 'description',
      header: 'DESCRIPTION',
      cell: ({ row }) => {
        const description = row.original.description;
        return <p>{description?.slice(0, 50)}</p>;
      },
    },
    {
      header: 'ACTION',
      id: 'actions',
      cell: ({ row }: any) => <ReviewCell data={row.original} />,
    },
  ];

  return columns;
};
export const getAdvertisementColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'image',
      header: 'IMAGE',
      cell: ({ row }) => {
        const image = row.original.image;
        return (
          <Avatar className='h-8 w-8'>
            <AvatarImage src={image} alt={'image'} className='object-cover' />
          </Avatar>
        );
      },
    },
    {
      accessorKey: 'title',
      header: 'TITLE',
    },

    {
      accessorKey: 'description',
      header: 'DESCRIPTION',
      cell: ({ row }) => {
        const description = row.original.description;
        return <p>{description?.slice(0, 50)}</p>;
      },
    },
    {
      header: 'ACTION',
      id: 'actions',
      cell: ({ row }: any) => <AdCell data={row.original} />,
    },
  ];

  return columns;
};
export const getReferralColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'code',
      header: 'Code',
    },
    {
      accessorKey: 'doctorName',
      header: 'DOCTOR NAME',
      cell: ({ row }) => {
        const doctorName = row.original.doctorName;
        return <p>{doctorName}</p>;
      },
    },
    {
      accessorKey: 'email',
      header: 'EMAIL',
    },
    {
      accessorKey: 'isUsed',
      header: 'USED',
      cell: ({ row }) => {
        const isUsed = row.original.isUsed;
        return <p>{isUsed ? 'Yes' : 'No'}</p>;
      },
    },
    {
      accessorKey: 'isValid',
      header: 'VALID',
      cell: ({ row }) => {
        const isValid = row.original.isValid;
        return <p>{isValid ? 'Yes' : 'No'}</p>;
      },
    },

    {
      accessorKey: 'validUntil',
      header: 'VALID UNTIL',
      cell: ({ row }) => {
        const validUntil = row.original.validUntil;
        return <p>{format(validUntil, 'dd/MM/yyyy')}</p>;
      },
    },
    {
      header: 'ACTION',
      id: 'actions',
      cell: ({ row }: any) => <ReferralCell data={row.original} />,
    },
  ];

  return columns;
};

export const getBillingColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      id: 'slNo',
      header: 'SL No',
      cell: ({ row }) => row.index + 1,
    },

    //add hospitalName
    {
      accessorKey: 'hospitalName',
      header: 'Hospital Name',
      cell: ({ row }) => {
        const hospitalName = row.original?.doctor?.hospitalName;
        return <p>{hospitalName}</p>;
      },
    },

    //add hospitalAddress
    {
      accessorKey: 'hospitalAddress',
      header: 'Hospital Address',
      cell: ({ row }) => {
        console.log(row.original?.doctor);
        const hospitalAddress = row.original?.doctor?.hospitalAddress;
        if (!hospitalAddress) return <p>Not available</p>;
        return (
          <p>
            {hospitalAddress.address}, {hospitalAddress.city},{' '}
            {hospitalAddress.state}
          </p>
        );
      },
    },

    //add doctorName
    { accessorKey: 'doctorName', header: 'Doctor Name' },

    {
      accessorKey: 'patientName',
      header: 'Patient Name',
    },
    {
      accessorKey: 'phoneNumber',
      header: 'Phone Number',
    },
    {
      accessorKey: 'address',
      header: 'Address',
    },
    {
      accessorKey: 'date',
      header: 'Issue Date',
    },

    {
      accessorKey: 'items',
      header: 'Items',
      cell: ({ row }) => {
        const totalCost = row.original.items.reduce(
          (acc: number, item: any) => {
            return acc + item.amount;
          },
          0
        );
        return (
          <div className='flex flex-col gap-1'>
            {row.original.items?.map((item: any, index: number) => (
              <div
                key={index}
                className='flex items-center justify-between w-full gap-5 border-b border-gray-200 py-2 px-4'
              >
                <span className='text-gray-700'>{item.name}</span>
                <span className='text-gray-500'>₹{item.amount}</span>
              </div>
            ))}
            <div className='flex items-center justify-between w-full gap-5 px-4 py-2'>
              <span className='text-gray-700'>total</span>
              <span className='text-gray-500'>₹{totalCost}</span>
            </div>
          </div>
        );
      },
    },
    {
      header: 'ACTION',
      id: 'actions',
      cell: ({ row }: any) => <BillingCell data={row.original} />,
    },
  ];

  return columns;
};
