import React from "react";

const FoodSafetySection = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-8">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Ensuring Food Safety at Merry Meal</h1>
          <p className="text-lg leading-7">
            At MerryMeal, we are committed to delivering meals that are not only
            delicious but also meet the highest standards of safety and hygiene.
            Our mission is to ensure the health and well-being of every individual
            we serve by adhering to rigorous food safety practices at every step. From
            sourcing fresh ingredients to delivering prepared meals, we leave no stone
            unturned in maintaining quality and trust.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://img.freepik.com/premium-photo/food-scientist-injecting-tomato_13339-87180.jpg?w=996"
            alt="Food Safety"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Introduction - Why Food Safety Matters</h2>
          <p className="text-lg leading-7">
            "Food safety is at the heart of everything we do at MerryMeal. We understand the critical role it plays in
            ensuring the health and vitality of our community members. By following strict safety protocols and staying
            updated on the latest industry standards, we create a seamless process that protects our clients from
            foodborne illnesses while delivering the nutrition they need."
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quality Control - Stringent Quality Control Practices</h2>
          <p className="text-lg leading-7">
            "To uphold the highest standards of food safety, MerryMeal performs thorough quality checks at every
            stage of meal preparation. From selecting premium ingredients to overseeing kitchen hygiene, we enforce
            robust safety measures. Our partners and staff are trained in advanced quality assurance techniques to
            ensure meals are prepared and delivered with care and precision."
          </p>
        </div>

        {/* Section 3 */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-center">Collaboration with Certified Providers</h2>
          <p className="text-lg leading-7">
            "We are proud to collaborate with certified food service providers who share our commitment to safety
            and quality. These partnerships ensure that all meals meet stringent safety certifications and industry
            standards. By working with trusted providers, MerryMeal guarantees meals that are both nutritious and
            prepared in compliance with national and international safety guidelines."
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="flex justify-center">
        <img
        src="https://i0.wp.com/www.siamdevelopment.com/wp-content/uploads/2023/10/Import-food-in-thailand.jpg?fit=800%2C500&ssl=1"
        alt="Food Safety Certifications"
        className="w-full max-w-[600px] h-auto rounded-md shadow-lg object-contain"
        />
  </div>
    </div>
  );
};

export default FoodSafetySection
