'use client';
import { Separator } from '@/components/ui/separator';
import { getAppointmentColumns } from './columns';
import { Heading } from './heading';
import { AppointmentsDataTable } from './appointments-data-table';
import { AddAppointmentModal } from './add-appointment-modal';
import { useAppContext } from '@/lib/context';

export const Appointments: React.FC = () => {
  const { user } = useAppContext();

  return (
    <>
      <div className='flex sm:flex-row flex-col gap-4 items-start justify-between'>
        <Heading title='Appointments' description='Manage Appointments' />

        {user?.role === 'doctor' && <AddAppointmentModal />}
      </div>
      <Separator />
      <AppointmentsDataTable
        columns={getAppointmentColumns(user?.role)}
        userRole={user?.role || 'doctor'}
      />
    </>
  );
};
