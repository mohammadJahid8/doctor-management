'use client';

import { Appointments } from '@/components/global/appointments';
import PageContainer from '@/components/global/page-container';
import React from 'react';

const DoctorAppointments = () => {
  return (
    <PageContainer>
      <div className='space-y-2'>
        <Appointments />
      </div>
    </PageContainer>
  );
};

export default DoctorAppointments;
