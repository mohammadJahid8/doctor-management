/* eslint-disable react/no-unescaped-entities */
import { Advertisement } from '@/components/global/advertisement';
import SectionTitle from '@/components/global/sec-title';
import Title from '@/components/global/title';
import { Suspense } from 'react';

const AboutPage = () => {
  return (
    <div
      id='faqs'
      className='px-4 sm:px-6 xl:px-0 py-[60px] sm:py-[80px] md:py-[100px]'
    >
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col gap-6 sm:gap-8 justify-center items-center pb-12 sm:pb-16'>
          <div className='text-center space-y-3 sm:space-y-4'>
            <SectionTitle title='About Us' />
            <Title
              title='Welcome to DOCalert'
              className='text-[28px] sm:text-[36px] lg:text-[52px] leading-[1.2em] font-bold'
            />
            <p className='text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto leading-relaxed px-4 sm:px-0'>
              India's most trusted patient management and growth platform for
              healthcare professionals
            </p>
          </div>

          <div className='w-full space-y-8 sm:space-y-12'>
            <div className='prose prose-base sm:prose-lg max-w-none'>
              <p className='text-base sm:text-lg leading-relaxed text-foreground'>
                At DOCalert, our mission is to empower healthcare professionals
                by streamlining practice management, enhancing patient
                satisfaction, and driving sustainable clinic growth through
                innovative technology solutions.
              </p>

              <p className='text-base sm:text-lg leading-relaxed text-foreground'>
                We understand that your time is invaluable. Every moment spent
                on administrative tasks is time taken away from patient care.
                DOCalert is designed as a comprehensive clinic management
                platform that automates workflows and optimizes operations for
                medical professionals.
              </p>
            </div>

            <div className='grid gap-8 sm:gap-12'>
              <section className='bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-red-200/50 dark:border-red-800/30'>
                <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6'>
                  Common Healthcare Management Challenges
                </h2>
                <div className='grid gap-3 sm:gap-4'>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Patient records scattered across multiple systems and
                      paper registers
                    </p>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Excessive administrative workload reducing consultation
                      time
                    </p>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      High appointment no-show rates and poor patient retention
                    </p>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Limited online visibility affecting patient acquisition
                    </p>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Ineffective follow-up systems hindering practice growth
                    </p>
                  </div>
                </div>
              </section>

              <section className='bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-blue-200/50 dark:border-blue-800/30'>
                <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4'>
                  Our Comprehensive Solution
                </h2>
                <p className='text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground'>
                  DOCalert provides an integrated ecosystem of tools designed to
                  transform your practice management:
                </p>
                <div className='grid gap-4'>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h3 className='font-semibold text-base sm:text-lg'>
                        Smart Patient Records
                      </h3>
                      <p className='text-sm sm:text-base text-muted-foreground'>
                        Instant data entry, complete medical history, and secure
                        cloud storage
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h3 className='font-semibold text-base sm:text-lg'>
                        Professional Documentation
                      </h3>
                      <p className='text-sm sm:text-base text-muted-foreground'>
                        One-click OPD slip generation with branded, error-free
                        formatting
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h3 className='font-semibold text-base sm:text-lg'>
                        Review Management System
                      </h3>
                      <p className='text-sm sm:text-base text-muted-foreground'>
                        Automated Google review acquisition to enhance online
                        reputation
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h3 className='font-semibold text-base sm:text-lg'>
                        Intelligent Appointment System
                      </h3>
                      <p className='text-sm sm:text-base text-muted-foreground'>
                        WhatsApp reminders and executive follow-ups to reduce
                        no-shows
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h3 className='font-semibold text-base sm:text-lg'>
                        Analytics & Insights
                      </h3>
                      <p className='text-sm sm:text-base text-muted-foreground'>
                        Patient retention analysis and data-driven growth
                        recommendations
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h3 className='font-semibold text-base sm:text-lg'>
                        Recognition Program
                      </h3>
                      <p className='text-sm sm:text-base text-muted-foreground'>
                        Professional certifications and awards to build patient
                        trust
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h3 className='font-semibold text-base sm:text-lg'>
                        Advanced Billing
                      </h3>
                      <p className='text-sm sm:text-base text-muted-foreground'>
                        GST-compliant invoicing with automated accounting
                        integration
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className='bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-green-200/50 dark:border-green-800/30'>
                <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6'>
                  Expected Growth Outcomes
                </h2>
                <div className='grid gap-3 sm:gap-4'>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Significant increase in patient trust and retention within
                      months
                    </p>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Establishment as the preferred healthcare provider in your
                      locality
                    </p>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Sustained practice growth through systematic patient
                      engagement
                    </p>
                  </div>
                </div>
                <p className='mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground'>
                  Our dedicated analytics and support teams provide continuous
                  guidance to ensure your practice achieves consistent,
                  measurable growth.
                </p>
              </section>

              <section className='bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-purple-200/50 dark:border-purple-800/30'>
                <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6'>
                  Flexible Pricing Plans
                </h2>
                <div className='grid gap-4 sm:gap-6 lg:grid-cols-3'>
                  <div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg border'>
                    <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                      Lifetime License
                    </h3>
                    <p className='text-2xl sm:text-3xl font-bold text-purple-600 mb-2'>
                      ₹25,000
                    </p>
                    <p className='text-sm text-muted-foreground mb-4'>
                      One-time setup fee
                    </p>
                    <p className='text-sm'>
                      Complete system access with full customization and
                      lifetime updates
                    </p>
                  </div>
                  <div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg border'>
                    <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                      Premium Plan
                    </h3>
                    <p className='text-2xl sm:text-3xl font-bold text-purple-600 mb-2'>
                      ₹5,000
                    </p>
                    <p className='text-sm text-muted-foreground mb-4'>
                      Per month
                    </p>
                    <p className='text-sm'>
                      All core features excluding advanced analytics and
                      recognition programs
                    </p>
                  </div>
                  <div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg border'>
                    <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                      Premium Plus
                    </h3>
                    <p className='text-2xl sm:text-3xl font-bold text-purple-600 mb-2'>
                      ₹10,000
                    </p>
                    <p className='text-sm text-muted-foreground mb-4'>
                      Per month
                    </p>
                    <p className='text-sm'>
                      Complete feature access with multi-doctor login
                      capabilities
                    </p>
                  </div>
                </div>
              </section>

              <section className='bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-orange-200/50 dark:border-orange-800/30'>
                <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4'>
                  The Cost of Delayed Implementation
                </h2>
                <p className='text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground'>
                  Every day without DOCalert represents:
                </p>
                <div className='grid gap-3 sm:gap-4 mb-4 sm:mb-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Lost patients due to poor retention systems
                    </p>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Missed opportunities from online patient searches
                    </p>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0'></div>
                    <p className='text-base sm:text-lg'>
                      Productivity loss due to manual administrative processes
                    </p>
                  </div>
                </div>
                <div className='bg-orange-100 dark:bg-orange-900/20 p-4 rounded-lg'>
                  <p className='text-base sm:text-lg font-medium text-center'>
                    Transform your clinic from merely operational to
                    exceptionally successful with DOCalert.
                  </p>
                </div>
              </section>

              <section className='bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-800/50 p-4 sm:p-6 lg:p-8 rounded-xl border'>
                <h2 className='text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center'>
                  Contact Information
                </h2>
                <div className='grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-[600px] mx-auto'>
                  <div className='text-center'>
                    <h3 className='font-semibold text-base sm:text-lg mb-2'>
                      Phone Support
                    </h3>
                    <a
                      href='tel:+918790986015'
                      className='text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors block'
                    >
                      +91 87909 86015
                    </a>
                  </div>
                  <div className='text-center'>
                    <h3 className='font-semibold text-base sm:text-lg mb-2'>
                      Email Support
                    </h3>
                    <a
                      href='mailto:docalerthelp@gmail.com'
                      className='text-base sm:text-lg text-blue-600 hover:text-blue-700 transition-colors break-words'
                    >
                      docalerthelp@gmail.com
                    </a>
                  </div>
                </div>
                <div className='mt-6 sm:mt-8 text-center'>
                  <p className='text-lg sm:text-xl font-medium text-muted-foreground italic'>
                    DOCalert — Elevating healthcare practices through
                    intelligent technology
                  </p>
                </div>
              </section>
            </div>

            <div className='prose prose-base sm:prose-lg max-w-none'>
              <p className='text-base sm:text-lg leading-relaxed text-foreground'>
                Our platform is engineered for accessibility, ensuring that
                healthcare professionals with varying levels of technical
                expertise can operate the system efficiently. Whether you manage
                a large hospital network or operate an independent clinic,
                DOCalert scales to support your specific requirements.
              </p>
            </div>
          </div>
        </div>

        <Suspense
          fallback={<div className='h-[250px] animate-pulse bg-muted'></div>}
        >
          <Advertisement position='before-footer' />
        </Suspense>
      </div>
    </div>
  );
};

export default AboutPage;
