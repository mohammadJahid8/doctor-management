'use client';

import PageContainer from '@/components/global/page-container';
import { Referral } from '@/components/global/referral';
import React from 'react';

const GenerateReffaralCode = () => {
  return (
    <PageContainer>
      <div className='space-y-2'>
        <Referral />
      </div>
    </PageContainer>
  );
};

export default GenerateReffaralCode;
