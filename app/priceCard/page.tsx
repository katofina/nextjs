import React from "react";

interface PricingProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const Pricing: React.FC<PricingProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`
          flex flex-col justify-between items-center text-center 
          border border-gray-300 relative overflow-hidden
          ${
            isFeatured
              ? "bg-[#2f4a5c] text-white w-72 h-[520px] z-10 shadow-xl translate-y-10"
              : "bg-white text-[#2f4a5c] w-80 h-[460px] mt-0"
          }
        `}
    >
      {/* Верхняя часть */}
      <div className="w-full">
        <div className="text-lg font-semibold py-4">{plan}</div>
        <div className="text-5xl font-extrabold py-2">{price}</div>
        <div className="w-full border-t border-gray-400" />

        {/* Список фичей */}
        {features.map((feature, index) => (
          <div
            key={index}
            className={`w-full py-4 border-t ${
              isFeatured
                ? "border-gray-300 text-white"
                : "border-gray-400 text-[#2f4a5c]"
            } text-sm`}
          >
            {feature}
          </div>
        ))}

        {/* Нижняя линия под фичами */}
        <div
          className={`w-full border-t ${
            isFeatured ? "border-gray-300" : "border-gray-400"
          }`}
        />
      </div>

      {/* Кнопка Subscribe без верхней линии */}
      <div className="w-full h-[100px] flex items-center justify-center">
        <button
          className={`uppercase font-bold text-lg ${
            isFeatured ? "text-white" : "text-[#2f4a5c]"
          }`}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-end px-4 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:gap-0">
        <Pricing
          plan="Standard"
          price="$100"
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space",
          ]}
        />
        <Pricing
          plan="Pro"
          price="$200"
          features={[
            "100,000 Requests",
            "7 contributors",
            "Up to 6 GB storage space",
          ]}
          isFeatured
        />
        <Pricing
          plan="Expert"
          price="$500"
          features={[
            "200,000 Requests",
            "11 contributors",
            "Up to 10 GB storage space",
          ]}
        />
      </div>
    </div>
  );
}
