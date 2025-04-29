import React from "react";

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

const Consulting = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-white text-gray-800">
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1o6MhFJhDQEIpigAKX0X3IvmlP1XX4dghdQ&s" 
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
  );
};

export default Consulting;
