import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaCalendarAlt,
  FaBookOpen,
  FaBed,
  FaDollarSign,
  FaQuestionCircle,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teacher1 from "../assets/Teacher1.jpeg";
import teacher2 from "../assets/Teacher2.jpg";
import teacher3 from "../assets/Teacher3.webp";

const howItWorksCards = [
  {
    icon: <FaBed className="text-orange-400 text-3xl" />,
    title: "Yotoqxona",
    description: "Biz ko'pchilik markazlarimizda turar joy yoki oilaviy mehmonxonalarni taklif qilamiz.",
    link: "Narxlarni ko'rish",
  },
  {
    icon: <FaDollarSign className="text-orange-400 text-3xl" />,
    title: "Narxlar",
    description: "Kurslarimiz qancha turishini bilish uchun narxlar bo'yicha qo'llanmamizni ko'rib chiqing.",
    link: "Narxlarni ko'rish",
  },
  {
    icon: <FaQuestionCircle className="text-orange-400 text-3xl" />,
    title: "Savollar",
    description: "Darslar, yotoqxona yoki boshqa savollaringiz bo'lsa — tez-tez so'raladigan savollarga qarang.",
    link: "Savollar bo'limi",
  },
];

const countries = [
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    minIELTS: "6.5",
    description: "UK universitetlari kuchli akademik dasturlar bilan mashhur. Ko'plab grant va foundation imkoniyatlari mavjud.",
  },
  {
    name: "United States",
    flag: "https://flagcdn.com/us.svg",
    minIELTS: "6.5 - 7.0",
    description: "AQShdagi universitetlar dunyoning eng yaxshi oliygohlari qatoriga kiradi. Talabalar campus hayotidan zavqlanishadi.",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    minIELTS: "6.0",
    description: "Kanada - sifatli ta'lim va xavfsiz muhit uchun mashhur. Immigratsion imkoniyatlar ham mavjud.",
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/au.svg",
    minIELTS: "6.0 - 6.5",
    description: "Australia innovatsion ta'lim tizimi va go'zal tabiatga ega. Talabalar uchun flexible vizalar mavjud.",
  },
  {
    name: "Germany",
    flag: "https://flagcdn.com/de.svg",
    minIELTS: "6.0",
    description: "Germaniyada ko'plab universitetlar bepul o'qitadi. IELTS talab qilinadi, lekin ba'zilarida alternativ variantlar mavjud.",
  },
];


const newCourses = [
  {
    title: "Frontend Development",
    date: "1-May",
    level: "Intermediate",
    teacher: {
      name: "Bekhruz Mansurov",
      role: "Middle React Instructor",
      image: teacher1,
    },
  },
  {
    title: "IELTS 6.5+ Course",
    date: "10-May",
    level: "Advanced",
    teacher: {
      name: "Laziza Tolibjonova",
      role: "Certified IELTS Trainer",
      image: teacher2,
    },
  },
  {
    title: "Python for Beginners",
    date: "15-May",
    level: "Beginner",
    teacher: {
      name: "Rasulbek Saidov",
      role: "Python Instructor",
      image: teacher3,
    },
  },
];

const Home = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-snug">
          Welcome to <span className="text-orange-500">Young Adults</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Master your future with our top-tier <strong>IT</strong> and <strong>English</strong> lessons. Join a vibrant community of learners and take your skills to the next level!
        </p>
        <div className="flex justify-center mb-12">
        </div>
        <SectionDivider title="YANGI KURSLAR" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {newCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-100 to-white p-6 rounded-2xl shadow-md border border-orange-200 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
               <div className="flex items-center gap-3 mb-4">
                  <FaRocket className="text-orange-500 text-2xl" />
                  <h3 className="text-xl font-bold text-blue-900">{course.title}</h3>
                </div>
                <p className="text-gray-600 flex items-center gap-2 mb-2">
                  <FaCalendarAlt className="text-orange-500" />
                  Boshlanish sanasi: {course.date}
                </p>
                <p className="text-gray-600 flex items-center gap-2 mb-4">
                  <FaBookOpen className="text-orange-500" />
                  Level: <span className="ml-1 font-semibold">{course.level}</span>
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-orange-100">
                <img
                  src={course.teacher.image}
                  alt={course.teacher.name}
                  className="w-12 h-12 rounded-full object-cover border"
                /> 
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">{course.teacher.name}</p>
                  <p className="text-xs text-gray-500">{course.teacher.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionDivider title="QANDAY ISHLAYDI?" />
        <p className="text-gray-700 mb-8">
          Siz uchun darslar, turar joy va ijtimoiy dasturlarni tashkil qilamiz. <br />
          Sizga faqat o'zingizga mos kursni tanlab, ingliz tilini o'rganish sarguzashtingizni boshlash qoladi!
        </p>
        <Slider {...sliderSettings} className="mb-16 px-2">
          {howItWorksCards.map((item, idx) => (
            <div key={idx} className="p-4">
              <div className="bg-white border border-orange-200 rounded-xl p-6 shadow hover:shadow-lg transition h-full flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-bold text-blue-900 my-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-orange-500 font-medium hover:text-blue-800 hover:underline">
                  {item.link}
                </button>
              </div>
            </div>
          ))}
        </Slider>

        <section className="py-12 px-4 sm:px-6 lg:px-16 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Konsalting Xizmatlari
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Biz sizga ta'lim, til o'rganish va chet eldagi imkoniyatlar bo'yicha to‘liq
          yo'naltirish beramiz.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <img
          src="https://www.cgdev.org/sites/default/files/topic_UKpolicy.jpg" 
          alt="Consulting Banner"
          className="rounded-xl w-full max-w-5xl shadow-lg"
        />
      </div>

      <div className="mt-16">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          IELTS orqali chet elda o'qish imkoniyatlari
        </h3>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
          IELTS imtihonini topshirgan o'quvchilarimizni biz Buyuk Britaniya, AQSh,
          Kanada, Avstraliya, Germaniya kabi davlatlardagi universitetlarga yuboramiz.
          Har bir davlatning minimal IELTS talablari va o'qish sharoitlari haqida
          tanishing:
        </p>
        
        <SectionDivider title="Konsulting Xizmati" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h4 className="text-xl font-semibold">{country.name}</h4>
              </div>
              <p className="text-gray-700 mb-2">{country.description}</p>
              <p className="text-blue-700 font-medium">
                IELTS minimal:{" "}
                <span className="font-bold">{country.minIELTS}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

        <SectionDivider title="Tanlashga Qiynalayapsizmi...?" />
        <div className="bg-white border border-orange-100 rounded-2xl shadow p-6 md:p-10 mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center">
            Qaysi kurs sizga mos ekanligiga ishonchingiz komil emasmi?
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Biz har qanday darajadagi o'quvchilar uchun mo'ljallangan keng turdagi kurslarni taklif qilamiz.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-900 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full w-full md:w-auto"
            >
              Biz bilan bog'laning
            </button>
            <a
              href="/brochure/adult"
              className="border border-orange-400 text-orange-500 hover:bg-orange-50 font-medium px-6 py-3 rounded-full w-full md:w-auto text-center"
            >
              Kattalar uchun katalog
            </a>
            <a
              href="/brochure/junior"
              className="border border-orange-400 text-orange-500 hover:bg-orange-50 font-medium px-6 py-3 rounded-full w-full md:w-auto text-center"
            >
              Yoshlarga mo'ljallangan katalog
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

const SectionDivider = ({ title }) => (
  <div className="relative my-12">
    <hr className="border-t border-orange-200" />
    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-orange-500 font-semibold tracking-wide">
      {title}
    </span>
  </div>
);

export default Home;
