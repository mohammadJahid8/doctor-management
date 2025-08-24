'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  Check,
  X,
  Star,
  Crown,
  Award,
  CreditCard,
  Settings,
  TrendingUp,
  Phone,
  Mail,
  Shield,
} from 'lucide-react';
import { useAppContext } from '@/lib/context';
import { toast } from 'sonner';
import api from '@/utils/axiosInstance';
import { useRouter } from 'next/navigation';

const Pricing = () => {
  const router = useRouter();
  const {
    setOpenReferral,
    setReferralsRefetch,
    referralsRefetch,
    user,
    setUserRefetch,
    userRefetch,
  } = useAppContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!user) {
      return router.push('/login');
    }

    setLoading(true);

    const referralCode = e.target.referralCode.value;

    try {
      const promise = await api.patch(`/users/activate-referral`, {
        referralCode: referralCode.toUpperCase(),
      });
      if (promise.status === 200) {
        setOpenReferral(false);
        setReferralsRefetch(!referralsRefetch);
        setUserRefetch(!userRefetch);
        setLoading(false);
        toast.success(`Referral code activated.`, {
          position: 'top-center',
        });
        router.push('/doctors-dashboard');
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      return toast.error(
        error.response.data.message || `Failed to activate Referral Code!`,
        {
          position: 'top-center',
        }
      );
    }
  };

  return (
    <div
      id='pricing'
      className='bg-white px-4 sm:px-6 lg:px-8 xl:px-0 py-12 sm:py-16 md:py-20 lg:py-[100px]'
    >
      <div className='max-w-[1200px] mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <div className='inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <CreditCard className='w-3 h-3 sm:w-4 sm:h-4' />
            DOCalert Pricing
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2'>
            Simple. Transparent. Premium.
          </h1>
          <p className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2'>
            Doctor, you focus on healing patients — we&apos;ll handle everything
            else. Professional clinic management that grows with your practice.
          </p>
        </div>

        {/* One-Time Setup Section */}
        <div className='bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20'>
          <div className='text-center mb-8 sm:mb-10'>
            <div className='inline-flex items-center gap-2 bg-white text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm'>
              <Shield className='w-3 h-3 sm:w-4 sm:h-4' />
              One-Time Setup Investment
            </div>
            <div className='mb-3 sm:mb-4'>
              <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900'>
                ₹25,000
              </span>
              <span className='text-base sm:text-lg lg:text-xl text-gray-500 ml-1 sm:ml-2'>
                one-time
              </span>
            </div>
            <p className='text-gray-600 text-sm sm:text-base lg:text-lg px-2'>
              Complete software setup with lifetime license
            </p>
          </div>

          <div className='grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto'>
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='size-4 md:size-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <Check className='text-white w-3 h-3' />
                </div>
                <span className='text-gray-700 font-medium'>
                  Lifetime Software License
                </span>
              </div>
              <div className='flex items-start gap-4'>
                <div className='size-4 md:size-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <Check className='text-white w-3 h-3' />
                </div>
                <span className='text-gray-700 font-medium'>
                  Personalized Clinic Setup (Logo, OPD slips, Billing, Staff
                  Access)
                </span>
              </div>
            </div>
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='size-4 md:size-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <Check className='text-white w-3 h-3' />
                </div>
                <span className='text-gray-700 font-medium'>
                  Free Installation & Onboarding Support
                </span>
              </div>
              <div className='flex items-start gap-4'>
                <div className='size-4 md:size-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <Check className='text-white w-3 h-3' />
                </div>
                <span className='text-gray-700 font-medium'>
                  Quick Training – Start in Minutes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Plans Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <div className='inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <Settings className='w-3 h-3 sm:w-4 sm:h-4' />
            Monthly Maintenance Plans
          </div>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2'>
            Choose Your Growth Plan
          </h2>
          <p className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2'>
            Select the plan that matches your clinic&apos;s growth stage and
            requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className='grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20'>
          {/* Premium Plan */}
          <div className='bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 relative'>
            <div className='text-center mb-6 sm:mb-8'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <Star className='text-blue-600 w-5 h-5 sm:w-7 sm:h-7' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2'>
                Premium
              </h3>
              <p className='text-gray-500 text-xs sm:text-sm'>
                Best for single-doctor clinics
              </p>
            </div>

            <div className='text-center mb-6 sm:mb-8'>
              <div className='flex items-baseline justify-center gap-1 mb-2'>
                <span className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900'>
                  ₹5,000
                </span>
                <span className='text-gray-500 text-sm sm:text-lg'>
                  / month
                </span>
              </div>
            </div>

            <div className='space-y-3 sm:space-y-4 mb-6'>
              <h4 className='font-semibold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6'>
                What&apos;s included:
              </h4>
              {[
                'Smart Patient Records',
                'Branded OPD Slips',
                'Google Review Amplifier (WhatsApp integration)',
                'Automated Appointment Reminders (WhatsApp + Calls)',
                'Flexible Billing (GST & Non-GST)',
                'Continuous Updates & Expert Support',
              ].map((feature, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <Check className='text-green-600 w-2.5 h-2.5 sm:w-3 sm:h-3' />
                  </div>
                  <span className='text-gray-700 text-sm sm:text-base'>
                    {feature}
                  </span>
                </div>
              ))}

              <div className='pt-4 sm:pt-6 border-t border-gray-100'>
                <h4 className='font-semibold text-gray-900 text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wide'>
                  Not included:
                </h4>
                {[
                  'Second-Appointment Analysis',
                  'Doctor Awards & Recognition',
                ].map((feature, index) => (
                  <div key={index} className='flex items-start gap-3 mb-2'>
                    <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <X className='text-gray-400 w-2.5 h-2.5 sm:w-3 sm:h-3' />
                    </div>
                    <span className='text-gray-400 text-xs sm:text-sm'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Plus Plan */}
          <div className='bg-white rounded-2xl sm:rounded-3xl border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 relative'>
            <div className='text-center mb-6 sm:mb-8 mt-4 sm:mt-6'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <Crown className='text-purple-600 w-5 h-5 sm:w-7 sm:h-7' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2'>
                Premium Plus
              </h3>
              <p className='text-gray-500 text-xs sm:text-sm'>
                Best for multi-doctor or busy clinics
              </p>
            </div>

            <div className='text-center mb-6 sm:mb-8'>
              <div className='flex items-baseline justify-center gap-1 mb-2'>
                <span className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900'>
                  ₹10,000
                </span>
                <span className='text-gray-500 text-sm sm:text-lg'>
                  / month
                </span>
              </div>
            </div>

            <div className='space-y-3 sm:space-y-4 mb-6'>
              <h4 className='font-semibold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6'>
                Everything in Premium PLUS:
              </h4>
              {[
                'Second-Appointment Analysis (track non-returning patients + growth dashboards)',
                'Doctor Awards & Recognition (medals, certificates, prestige branding)',
                'Multi-Doctor Login & Staff Access',
                'Personalized Growth Action Plans',
              ].map((feature, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <Check className='text-purple-600 w-2.5 h-2.5 sm:w-3 sm:h-3' />
                  </div>
                  <span className='text-gray-700 text-sm sm:text-base'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div className='bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20'>
          <div className='text-center mb-8 sm:mb-10'>
            <div className='inline-flex items-center gap-2 bg-white text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm'>
              <TrendingUp className='w-3 h-3 sm:w-4 sm:h-4' />
              Plan Comparison
            </div>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2'>
              Choose What&apos;s Right for You
            </h3>
            <p className='text-gray-600 text-sm sm:text-base lg:text-lg px-2'>
              Compare features across our plans
            </p>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full bg-white rounded-xl sm:rounded-2xl shadow-sm min-w-[600px]'>
              <thead>
                <tr className='border-b border-gray-100'>
                  <th className='text-left py-4 sm:py-6 px-3 sm:px-6 font-semibold text-gray-900 text-sm sm:text-base lg:text-lg'>
                    Plan
                  </th>
                  <th className='text-left py-4 sm:py-6 px-3 sm:px-6 font-semibold text-gray-900 text-sm sm:text-base lg:text-lg'>
                    Monthly Investment
                  </th>
                  <th className='text-left py-4 sm:py-6 px-3 sm:px-6 font-semibold text-gray-900 text-sm sm:text-base lg:text-lg'>
                    Key Features
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='py-4 sm:py-6 px-3 sm:px-6 flex items-center gap-2 sm:gap-3'>
                    <div className='w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center'>
                      <Star className='text-blue-600 w-3 h-3 sm:w-4 sm:h-4' />
                    </div>
                    <span className='font-semibold text-gray-900 text-sm sm:text-base'>
                      Premium
                    </span>
                  </td>
                  <td className='py-4 sm:py-6 px-3 sm:px-6 font-bold text-lg sm:text-xl lg:text-2xl text-gray-900'>
                    ₹5,000
                  </td>
                  <td className='py-4 sm:py-6 px-3 sm:px-6 text-gray-600 text-xs sm:text-sm lg:text-base'>
                    Core features: Records, OPD slips, reviews, reminders,
                    billing
                  </td>
                </tr>
                <tr className='hover:bg-purple-50 transition-colors'>
                  <td className='py-4 sm:py-6 px-3 sm:px-6 flex items-center gap-2 sm:gap-3'>
                    <div className='w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-purple-100 flex items-center justify-center'>
                      <Crown className='text-purple-600 w-3 h-3 sm:w-4 sm:h-4' />
                    </div>
                    <span className='font-semibold text-gray-900 text-sm sm:text-base'>
                      Premium Plus
                    </span>
                  </td>
                  <td className='py-4 sm:py-6 px-3 sm:px-6 font-bold text-lg sm:text-xl lg:text-2xl text-gray-900'>
                    ₹10,000
                  </td>
                  <td className='py-4 sm:py-6 px-3 sm:px-6 text-gray-600 text-xs sm:text-sm lg:text-base'>
                    Everything in Premium + Analytics, Awards, Multi-doctor
                    access
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Process */}
        <div className='bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20'>
          <div className='text-center mb-8 sm:mb-12'>
            <div className='inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <CreditCard className='w-3 h-3 sm:w-4 sm:h-4' />
              Simple Activation Process
            </div>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2'>
              How It Works
            </h3>
            <p className='text-gray-600 text-sm sm:text-base lg:text-lg px-2'>
              Get started in just 3 simple steps
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <div className='text-center'>
              <div className='w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6'>
                <CreditCard className='text-blue-600 w-8 h-8' />
              </div>
              <div className='bg-blue-50 rounded-xl p-6 h-32 flex flex-col justify-center'>
                <h4 className='font-semibold text-gray-900 mb-3 text-lg'>
                  1. Secure Payment
                </h4>
                <p className='text-gray-600 text-sm'>
                  Pay securely to our authorized representative
                </p>
              </div>
            </div>
            <div className='text-center'>
              <div className='w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6'>
                <Shield className='text-green-600 w-8 h-8' />
              </div>
              <div className='bg-green-50 rounded-xl p-6 h-32 flex flex-col justify-center'>
                <h4 className='font-semibold text-gray-900 mb-3 text-lg'>
                  2. Receive Code
                </h4>
                <p className='text-gray-600 text-sm'>
                  Get your unique activation code instantly
                </p>
              </div>
            </div>
            <div className='text-center'>
              <div className='w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6'>
                <Settings className='text-purple-600 w-8 h-8' />
              </div>
              <div className='bg-purple-50 rounded-xl p-6 h-32 flex flex-col justify-center'>
                <h4 className='font-semibold text-gray-900 mb-3 text-lg'>
                  3. Activate
                </h4>
                <p className='text-gray-600 text-sm'>
                  Enter code after login and start using immediately
                </p>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <form
              onSubmit={handleSubmit}
              className='bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md mx-auto'
            >
              <div className='bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 border border-gray-200'>
                <p className='text-gray-500 mb-2 sm:mb-3 text-xs sm:text-sm'>
                  Activation Code
                </p>
                <input
                  type='text'
                  required
                  name='referralCode'
                  placeholder='Enter your code here'
                  className='w-full bg-gray-50 rounded-lg p-2 sm:p-3 font-mono text-gray-700 text-xs sm:text-sm border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all'
                  disabled={loading}
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-0'
                disabled={loading}
              >
                {loading ? 'Activating' : 'Activate Now'}
              </Button>
            </form>
          </div>
        </div>

        {/* Growth Promise */}
        <div className='bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20'>
          <div className='text-center mb-8 sm:mb-12'>
            <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <TrendingUp className='w-3 h-3 sm:w-4 sm:h-4' />
              Growth Guarantee
            </div>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2'>
              Our Promise to You
            </h3>
            <p className='text-base sm:text-lg lg:text-xl text-gray-600 px-2'>
              Measurable results for your practice
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10'>
            <div className='text-center bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <TrendingUp className='text-green-600 w-6 h-6 sm:w-8 sm:h-8' />
              </div>
              <div className='mb-2 sm:mb-3'>
                <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900'>
                  7–10%
                </span>
              </div>
              <p className='text-green-600 font-semibold mb-1 sm:mb-2 text-base sm:text-lg'>
                More Patients
              </p>
              <p className='text-gray-500 text-xs sm:text-sm'>
                within 3 months
              </p>
            </div>
            <div className='text-center bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <TrendingUp className='text-blue-600 w-6 h-6 sm:w-8 sm:h-8' />
              </div>
              <div className='mb-2 sm:mb-3'>
                <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900'>
                  30–50%
                </span>
              </div>
              <p className='text-blue-600 font-semibold mb-1 sm:mb-2 text-base sm:text-lg'>
                Growth Rate
              </p>
              <p className='text-gray-500 text-xs sm:text-sm'>within 1 year</p>
            </div>
            <div className='text-center bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <Award className='text-purple-600 w-6 h-6 sm:w-8 sm:h-8' />
              </div>
              <div className='mb-2 sm:mb-3'>
                <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900'>
                  200%
                </span>
              </div>
              <p className='text-purple-600 font-semibold mb-1 sm:mb-2 text-base sm:text-lg'>
                Maximum Growth
              </p>
              <p className='text-gray-500 text-xs sm:text-sm'>within 5 years</p>
            </div>
          </div>

          <div className='text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100'>
            <p className='text-base sm:text-lg lg:text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed px-2'>
              With DOCalert, your clinic transforms from a practice into a
              trusted healthcare brand that patients actively recommend.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className='bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-12 text-center'>
          <div className='mb-8 sm:mb-10'>
            <div className='inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <Phone className='w-3 h-3 sm:w-4 sm:h-4' />
              Get in Touch
            </div>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2'>
              Ready to Transform Your Practice?
            </h3>
            <p className='text-gray-600 text-sm sm:text-base lg:text-lg px-2'>
              Contact our team to get started today
            </p>
          </div>

          <div className='grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto'>
            <div className='bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <Mail className='text-white w-5 h-5 sm:w-6 sm:h-6' />
              </div>
              <p className='text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2'>
                Email us at
              </p>
              <a
                href='mailto:docalerthelp@gmail.com'
                className='text-blue-700 hover:text-blue-800 font-bold text-sm sm:text-base lg:text-lg transition-colors break-all'
              >
                docalerthelp@gmail.com
              </a>
            </div>
            <div className='bg-gradient-to-r from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-4 sm:p-6'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-green-600 flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <Phone className='text-white w-5 h-5 sm:w-6 sm:h-6' />
              </div>
              <p className='text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2'>
                Call us at
              </p>
              <a
                href='tel:+918790986015'
                className='text-green-700 hover:text-green-800 font-bold text-sm sm:text-base lg:text-lg transition-colors'
              >
                +91 8790986015
              </a>
            </div>
          </div>

          <div className='bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto'>
            <p className='text-lg sm:text-xl lg:text-2xl text-gray-800 font-semibold mb-1 sm:mb-2'>
              DOCalert
            </p>
            <p className='text-sm sm:text-base lg:text-lg text-gray-600 italic px-2'>
              Because a doctor deserves more than just practice. A doctor
              deserves growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
