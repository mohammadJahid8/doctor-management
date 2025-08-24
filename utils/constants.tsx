import {
  BookImage,
  BookUser,
  BriefcaseMedical,
  FileClock,
  Layers,
  MessageSquare,
  Newspaper,
  NotebookPen,
  ReceiptText,
  Stethoscope,
  User,
  UserPlus,
} from 'lucide-react';

export const faqItems = [
  {
    question: 'What sets Docalert apart?',
    answer:
      'Our innovative platform empowers doctors to effortlessly manage patient data, track growth, and receive expert support for improvement.',
  },
  {
    question: "How do I unlock Docalert's benefits?",
    answer:
      'Simply sign up and purchase a subscription to access our comprehensive suite of tools.',
  },
  {
    question: 'Can I cancel or refund my subscription?',
    answer:
      'Please note that subscriptions are non-refundable and non-cancellable, as specified in our terms and conditions.',
  },
  {
    question: 'How does your growth analysis and support team work?',
    answer:
      'Our dedicated experts will analyze your patient data and provide personalized recommendations to enhance your practice.',
  },
  {
    question: 'What about patient reviews and feedback?',
    answer:
      "Patients can leave reviews, which we'll moderate and share with doctors to foster growth and improvement.",
  },
  {
    question: 'How does the gift and medal policy work?',
    answer:
      'Doctors who consistently receive excellent reviews will be rewarded with gifts and medals, celebrating their exceptional care.',
  },
  {
    question: 'Can you tell me more about the executive call support team?',
    answer:
      'Our team of over 1,000 call support specialists will contact patients to recall appointments, ensuring seamless communication.',
  },
  {
    question: "What's the scope of Docalert's user base?",
    answer:
      'We proudly support over 6,787 live doctors and more than 3 crore patients, and counting!',
  },
  {
    question: 'Is my data secure with Docalert?',
    answer:
      'Absolutely! We prioritize data security and comply with stringent Indian data protection laws.',
  },
];

export const menuItems = [
  // { href: "/login", label: "Login" },
  { href: '/about', label: 'About us' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/articles', label: 'Articles' },
];

export const footerItems = [
  // { href: "/login", label: "Login" },
  { href: '/about', label: 'About us' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/why-us', label: 'Why choose us?' },
  { href: '/articles', label: 'Articles' },
  { href: '/terms', label: 'Terms and Conditions' },
];

export const navItems = [
  {
    title: 'Billings',
    href: '/doctors-dashboard/billings',
    icon: <ReceiptText className='size-5 flex-none' />,
    label: 'Billings',
  },
  {
    title: 'Appointments',
    href: '/doctors-dashboard',
    icon: <Stethoscope className='size-5 flex-none' />,
    label: 'Appointments',
  },
  {
    title: 'Profile',
    href: '/doctors-dashboard/profile',
    icon: <User className='size-5 flex-none' />,
    label: 'Profile',
  },
  // {
  //   title: "Packages",
  //   href: "/packages",
  //   icon: <Layers className="size-5 flex-none" />,
  //   label: "Profile",
  // },
  {
    title: 'Review',
    href: '/review',
    icon: <MessageSquare className='size-5 flex-none' />,
    label: 'Review',
  },
];

export const navItemsAdmin = [
  {
    title: 'Doctors',
    href: '/admin-dashboard',
    icon: <BriefcaseMedical className='size-5 flex-none' />,
    label: 'Doctors',
  },
  {
    title: 'Billings',
    href: '/admin-dashboard/billings',
    icon: <ReceiptText className='size-5 flex-none' />,
    label: 'Billings',
  },
  {
    title: 'Appointments',
    href: '/admin-dashboard/appointments',
    icon: <Stethoscope className='size-5 flex-none' />,
    label: 'Appointments',
  },
  {
    title: 'Referral Code',
    href: '/admin-dashboard/referral',
    icon: <UserPlus className='size-5 flex-none' />,
    label: 'Referral',
  },
  {
    title: 'Articles',
    href: '/admin-dashboard/articles',
    icon: <Newspaper className='size-5 flex-none' />,
    label: 'Articles',
  },
  {
    title: 'Reviews',
    href: '/admin-dashboard/reviews',
    icon: <MessageSquare className='size-5 flex-none' />,
    label: 'Reviews',
  },
  {
    title: 'Advertisements',
    href: '/admin-dashboard/advertisements',
    icon: <BookImage className='size-5 flex-none' />,
    label: 'Advertisements',
  },
  {
    title: 'Profile',
    href: '/admin-dashboard/profile',
    icon: <User className='size-5 flex-none' />,
    label: 'Profile',
  },
];

export const users = [
  {
    id: 1,
    patientName: 'Patient Name',
    phone: 'Patient Phone Number',
    nextAppointmentDate: 'Next Appointment Date',
  },
];

//TODO: must change plan Id

export const standardPackages = [
  {
    price: '0',
    billing: 'Month',
    type: 'Free Package',
    planId: 'free-plan',
    features: [
      'Record patient details (name, phone number, next appointment)',
      'Generate OP slips for patients',
      'Hospital/Clinic billing (with or without GST)',
      'Advanced patient data analytics & insights',
    ],
    note: 'Limited features; Call reminders, reviews, and growth support not included.',
    icon: <FileClock className='text-white w-[45px] h-[45px] -mb-5' />,
  },
  {
    price: '2,889',
    billing: 'Monthly',
    type: 'Basic Package',
    planId: 'plan_QbApLkrC565IuH',

    features: [
      'Record patient data, including name, phone number, and next appointment date',
      'Generate OP slips for patients',
      'Hospital/Clinic billing with GST or without GST',
      'Appointment reminders via our executive call support team',
      'Growth analysis and support from our team of experts',
      'Patient review and feedback collection via WhatsApp',
      'Doctor performance tracking and rewards',
      'Advanced patient data analytics & insights',
      'Complimentary listing on our doctor directory',
    ],
    icon: <FileClock className='text-white w-[45px] h-[45px] -mb-5' />,
  },
  {
    price: '15,600',
    discount: '10%',
    billing: 'Semi-Annual',
    type: 'Semi-Annual Package',
    planId: 'plan_QbAol8j2VLsrfQ',
    features: [
      'All features from Baisc Plan +',
      'Patient data analytics and insights',
      'Customized patient engagement campaigns',
      'Priority customer support',
    ],
    icon: <NotebookPen className='text-white w-[45px] h-[45px] -mb-5' />,
  },
  {
    price: '27,734',
    billing: 'Annual',
    discount: '20%',
    type: 'Annual Package',
    planId: 'plan_QbAnm9Huq6xaPY',
    features: [
      'All features from Semi-Annual Plan +',
      'Dedicated account manager',
      'Complimentary listing on our doctor directory',
      'Maximum savings',
    ],
    icon: <BookUser className='text-white w-[45px] h-[45px] -mb-5' />,
  },
];

export const testimonialData = [
  {
    title: 'Exceptional Service',
    description:
      'The team went above and beyond to ensure our project was a success. Their attention to detail and dedication were evident throughout.',
    img: '',
    name: 'Alice Johnson',
    position: 'Product Manager, Innovate Tech Solutions',
    rating: 5,
  },
  {
    title: 'Highly Recommend',
    description:
      'Their expertise and professionalism were outstanding. We couldn’t have asked for a better experience.',
    img: '',
    name: 'Bob Carter',
    position: 'Chief Strategy Officer, FutureGen Enterprises',
    rating: 5,
  },
  {
    title: 'Great Results',
    description:
      'We saw significant improvements in our operations thanks to their innovative solutions.',
    img: '',
    name: 'Claire Roberts',
    position: 'Operations Director, Apex Manufacturing',
    rating: 4,
  },
  {
    title: 'Excellent Support',
    description:
      'The support team was always available to assist us with any issues. Their prompt responses were greatly appreciated.',
    img: '',
    name: 'Daniel Lee',
    position: 'Head of Customer Success, Retail Dynamics',
    rating: 5,
  },
  {
    title: 'Impressive Work',
    description:
      'Their ability to understand our needs and deliver accordingly was impressive. The project exceeded our expectations.',
    img: '',
    name: 'Ella Martin',
    position: 'Marketing Director, Creative Solutions Ltd',
    rating: 4,
  },
  {
    title: 'Creative Solutions',
    description:
      'The team provided creative solutions that were both effective and efficient. We’re thrilled with the results.',
    img: '',
    name: 'Frank Lewis',
    position: 'Brand Manager, Trendsetters Agency',
    rating: 5,
  },
  {
    title: 'Outstanding Collaboration',
    description:
      'Working with them was a collaborative experience. They valued our input and integrated it seamlessly into the final product.',
    img: '',
    name: 'Grace Adams',
    position: 'CTO, NextGen Technologies',
    rating: 4,
  },
  {
    title: 'Reliable and Trustworthy',
    description:
      'They were reliable and trustworthy throughout the entire process. We knew we were in good hands.',
    img: '',
    name: 'Henry Wilson',
    position: 'Project Coordinator, BuildIt Corp',
    rating: 5,
  },
  {
    title: 'Professional Team',
    description:
      'The team was professional from start to finish. They delivered on time and within budget, and the quality was top-notch.',
    img: '',
    name: 'Isabella Martinez',
    position: 'General Manager, Prestige Hospitality',
    rating: 4,
  },
  {
    title: 'Exceptional Quality',
    description:
      'The quality of work was exceptional. We’ve received numerous compliments from our clients and stakeholders.',
    img: '',
    name: 'James Anderson',
    position: 'VP of Operations, Elite Financial Group',
    rating: 5,
  },
];
