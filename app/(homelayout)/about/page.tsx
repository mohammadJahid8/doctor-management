/* eslint-disable react/no-unescaped-entities */
import { Advertisement } from "@/components/global/advertisement";
import SectionTitle from "@/components/global/sec-title";
import Title from "@/components/global/title";
import { Suspense } from "react";

const AboutPage = () => {
  return (
    <div id="faqs" className="px-4 xl:px-0 py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center pb-12">
          <SectionTitle title="About us" />
          <Title
            title="Welcome to DOCalert"
            className="text-[32px] lg:text-[46px] leading-[1.3em]"
          />
          <div className="flex flex-col gap-4 text-muted-foreground text-[17px]">
            <p>
              Welcome to <strong>DOCalert</strong>, India’s trusted patient
              management and growth platform for doctors, clinics, and
              hospitals.
            </p>

            <p>
              At DOCalert, our mission is simple — to help healthcare
              professionals grow their practice, improve patient satisfaction,
              and make clinic management easy for everyone.
            </p>

            <p>
              We provide a user-friendly system designed so that even
              individuals with minimal education or technical skills can operate
              it effortlessly. Whether you run a large hospital or a small
              clinic, DOCalert is built to support your growth.
            </p>

            <div className="flex flex-col gap-2">
              <strong>Our Key Features:</strong>

              <p>
                ✔️ <strong>Patient Records Made Easy:</strong> Quickly record
                essential patient details like name, phone number, and next
                appointment.
              </p>

              <p>
                ✔️ <strong>Instant OPD Slips:</strong> Generate OPD slips
                instantly for a smooth and organized check-in process.
              </p>

              <p>
                ✔️ <strong>WhatsApp Review System:</strong> Automatically send
                review links to patients via WhatsApp after each consultation.
              </p>

              <p>
                ✔️ <strong>Executive Call Support:</strong> Our team reminds
                patients of their appointments a day in advance via phone calls.
              </p>

              <p>
                ✔️ <strong>Growth Analysis & Doctor Feedback:</strong> Our expert
                team analyzes your practice growth and informs you of any issues
                to ensure continuous improvement.
              </p>

              <p>
                ✔️ <strong>Recognition for Excellence:</strong> Doctors who
                receive all positive feedback are rewarded with special gifts or
                medals.
              </p>

              <p>
                ✔️ <strong>Billing with or without GST:</strong> Generate bills
                easily with support for both GST and non-GST billing options.
              </p>

              <p>
                ✔️ <strong>Google Reviews for More Patients:</strong> We
                encourage happy patients to leave positive Google reviews,
                helping doctors increase their online presence and attract more
                patients through word-of-mouth referrals.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <strong>Simple, Accessible, Powerful:</strong>
              <p>
                DOCalert is designed to be so simple that even a 10th-pass
                student or someone with minimal technical knowledge can use it
                effectively.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <strong>We offer two plans:</strong>
              <p>
                <strong>Free Plan:</strong> Includes patient record management,
                OPD slip generation, and billing.
              </p>
              <p>
                <strong>Paid Subscription:</strong> Unlocks full features
                including call support, growth analysis, review collection,
                patient reminders, and more.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <strong>Why It Works:</strong>
              <p>
                According to our expert research, word of mouth remains a
                powerful tool in healthcare growth. By reminding patients of
                their appointments and engaging them with feedback systems,
                patients remember the doctor's name and recommend them to
                others, boosting practice growth naturally.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <strong>Join Us:</strong>
              <p>
                Join over <strong>6,700+</strong> doctors and clinics across
                India who trust DOCalert to simplify clinic management and
                increase patient growth.
              </p>
            </div>
          </div>
        </div>

        <Suspense
          fallback={<div className="h-[250px] animate-pulse bg-muted"></div>}
        >
          <Advertisement position="before-footer" />
        </Suspense>
      </div>
    </div>
  );
};

export default AboutPage;
