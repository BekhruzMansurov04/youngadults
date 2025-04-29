import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1d1f29] text-white pt-10 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">

        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">Young Adults</h2>
          <p className="text-sm text-gray-400">
            IT va Ingliz tili bo'yicha mukammal ta'lim platformasi.
            Zamonaviy bilimlar bilan kelajagingizni quramiz.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">IT Kurslar</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Frontend (HTML, CSS, JS)</a></li>
            <li><a href="#">React.js</a></li>
            <li><a href="#">Node.js</a></li>
            <li><a href="#">Python</a></li>
            <li><a href="#">SQL & Databases</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Ingliz Tili</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="">Beginner Grammar</a></li>
            <li><a href="">Speaking Practice</a></li>
            <li><a href="">IELTS tayyorlov</a></li>
            <li><a href="">Listening</a></li>
            <li><a href="">Writing & Reading</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Foydali Bo'limlar</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/info">Biz haqimizda</a></li>
            <li><a href="#">O'qituvchilar</a></li>
            <li><a href="#">Kurslar narxlari</a></li>
            <li><a href="#">Yangi yangiliklar</a></li>
            <li><a href="/Blog">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Aloqa</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="#">info@youngadults.uz</a></li>
            <li>Tel: <a href="#"> +998 90 123 45 67</a></li>
            <li>Manzil: Toshkent, Uzbekistan</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        <div className="flex space-x-4 text-xl text-gray-400">
         <a href="#"> <FaYoutube className="hover:text-red-500 cursor-pointer" /></a>
          <a href="#"><FaLinkedin className="hover:text-blue-400 cursor-pointer" /></a>
          <a href="#"><FaDiscord className="hover:text-indigo-400 cursor-pointer" /></a>
          <a href="#"><FaFacebook className="hover:text-blue-600 cursor-pointer" /></a>
          <a href="#"><FaInstagram className="hover:text-pink-500 cursor-pointer" /></a>
        </div>
        <p className="text-xs text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Young Adults. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
