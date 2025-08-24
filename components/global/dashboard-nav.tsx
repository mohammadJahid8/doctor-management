'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Dispatch, SetStateAction } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { useAppContext } from '@/lib/context';
import { AddReviewModal } from './add-review-modal';
import { AddAdvertisementModal } from './add-advertisement-modal';
import { AddReferralModal } from './add-referral';

interface DashboardNavProps {
  items: any;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false,
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized, setOpenReview } = useAppContext();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className='grid items-start gap-2'>
      <TooltipProvider>
        {items.map((item: any, index: number) => {
          return (
            item.href && (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={
                      item.disabled || item.title === 'Review' ? '#' : item.href
                    }
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground pl-3',
                      path === item.href ? 'bg-accent' : 'transparent',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                      if (item.title === 'Review') setOpenReview(true);
                    }}
                  >
                    {item.icon}

                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className='mr-2 truncate'>{item.title}</span>
                    ) : (
                      ''
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align='center'
                  side='right'
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          );
        })}
      </TooltipProvider>
      <AddReviewModal />
      <AddAdvertisementModal />
      <AddReferralModal />
    </nav>
  );
}
