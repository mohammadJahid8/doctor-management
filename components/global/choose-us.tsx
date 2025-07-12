/* eslint-disable @next/next/no-img-element */
import {
  MoveDownLeft,
  MoveDownRight,
  MoveLeft,
  MoveRight,
  MoveUpLeft,
  MoveUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ChooseUs = () => {
  const features = [
    {
      icon: "🗂",
      title: "Smart Patient Records",
      description: "Instantly log name, phone, next appointment — no Excel sheets, no delays",
      benefit: "Save hours each week & provide faster care with complete patient histories"
    },
    {
      icon: "🧾",
      title: "One-Click OPD Slips",
      description: "Print branded, professional OPD slips in seconds",
      benefit: "Streamlined check-ins = happier patients + efficient front desk"
    },
    {
      icon: "💬",
      title: "WhatsApp Review Magic",
      description: "After the visit, patients get a personalized WhatsApp review link",
      benefit: "Reviews boost your online reputation & reveal hidden improvement areas"
    },
    {
      icon: "📞",
      title: "Executive Call Reminders",
      description: "Our 1,000+ trained female agents call every patient a day before their visit",
      benefit: "Reduces no-shows by up to 30% • Makes patients feel truly cared for"
    },
    {
      icon: "📈",
      title: "Growth Intelligence Reports",
      description: "Monthly feedback, performance dashboards & alerts",
      benefit: "Get actionable advice from our expert growth team • Unlock 25–40% yearly growth through word-of-mouth alone"
    },
    {
      icon: "🏅",
      title: "Doctor Recognition & Awards",
      description: "100% positive feedback? You get medals, gifts, recognition",
      benefit: "Elevate your brand — patients trust doctors who are celebrated"
    },
    {
      icon: "💳",
      title: "Flexible Billing",
      description: "GST & non-GST billing in seconds",
      benefit: "Cut admin errors, stay compliant & professional"
    },
    {
      icon: "🌐",
      title: "Google Reviews Amplifier",
      description: "Happy patients = great reviews = top Google rank in your area",
      benefit: "More new patients, organically"
    }
  ];

  const Feature = ({ icon, label, className, order }: {
    icon: React.ReactNode;
    label: string;
    className?: string;
    order: string;
  }) => (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <span className="text-sm text-muted-foreground">{order}</span>
        <p className="font-semibold">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Features Section */}
      <div className="px-4 xl:px-0 py-[60px] md:py-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              📌 FEATURES THAT DEFINE SUCCESS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      {feature.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {feature.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Existing Why Choose Us Section */}
      <div
        id="why-us"
        className="px-4 xl:px-0 py-[60px] md:pt-[120px] md:-mb-[190px]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-2 justify-center items-center text-center pb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </p>
            <h2 className="text-[32px] lg:text-[46px] leading-[1.3em] font-bold">
              Why Choose DOCalert?
            </h2>
            <p className="text-muted-foreground max-w-[405px] text-[17px]">
              Proven track record of improving practices and patient satisfaction
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="flex flex-col 2lg:flex-row items-center 2lg:items-start gap-12 2lg:gap-0 2lg:space-x-4">
              <div className="relative z-10 flex flex-col items-end gap-12 2lg:-mr-[110px] 2lg:mt-[100px]">
                <Feature
                  icon={<MoveDownRight className="w-5 h-5 md:w-7 md:h-7" />}
                  label="Comprehensive Support"
                  className=""
                  order="01"
                />
                <Feature
                  icon={<MoveRight className="w-5 h-5 md:w-7 md:h-7" />}
                  label="Patient Management"
                  className="flex-row-reverse"
                  order="03"
                />
                <Feature
                  icon={<MoveUpRight className="w-5 h-5 md:w-7 md:h-7" />}
                  label="Appointment Reminders"
                  className=""
                  order="05"
                />
              </div>

              <div className="relative hidden md:block z-[1] choose-bg w-[640px] h-[640px] order-last 2lg:order-none ">
                <div className="w-[350px] h-[560px] pt-[50px] mx-auto">
                  <img src="/doc-6.png" alt="Vector Image" className="h-full" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-12 items-start 2lg:!-ml-[110px] 2lg:mt-[100px]">
                <Feature
                  icon={<MoveDownLeft className="w-5 h-5 md:w-7 md:h-7" />}
                  label="Growth Analysis and Support"
                  className="flex-row-reverse"
                  order="02"
                />
                <Feature
                  icon={<MoveLeft className="w-5 h-5 md:w-7 md:h-7" />}
                  label="Patient Review and Feedback"
                  className=""
                  order="04"
                />
                <Feature
                  icon={<MoveUpLeft className="w-5 h-5 md:w-7 md:h-7" />}
                  label="Subscription Benefits"
                  className="flex-row-reverse"
                  order="06"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Security Section */}
      <div className="px-4 xl:px-0 py-[60px] md:py-[80px] bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              🔐 IRONCLAD DATA SECURITY
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">🔒</div>
                <p className="text-lg font-medium">End-to-end encryption</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">📜</div>
                <p className="text-lg font-medium">100% compliance with Indian healthcare privacy laws</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">🧘</div>
                <p className="text-lg font-medium">Peace of mind for doctors & patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="px-4 xl:px-0 py-[60px] md:py-[80px] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">
              🪙 CHOOSE YOUR PLAN
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Complimentary Plan */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-3">🎁</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Complimentary Plan</h3>
                  <p className="text-gray-600 mb-4">(Perfect for Solo Doctors)</p>
                  <div className="text-2xl font-bold text-green-600">FREE Forever</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✔</span>
                    <span>Smart Patient Records</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✔</span>
                    <span>Instant OPD Slips</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✔</span>
                    <span>Basic Billing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💸</span>
                    <span className="font-medium">FREE Forever</span>
                  </div>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-primary text-white border-2 border-primary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  RECOMMENDED
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-3xl mb-3">👑</div>
                  <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                  <p className="text-blue-100 mb-4">(Best for Growth-Minded Clinics & Hospitals)</p>
                  <p className="text-lg font-medium">Unlock all features + dedicated support</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    <span>Executive Call Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    <span>Growth Analytics & Reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    <span>WhatsApp Review System</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    <span>Recognition & Awards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    <span>Google Review Engine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    <span>Personal Account Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
