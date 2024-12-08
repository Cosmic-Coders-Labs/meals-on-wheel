import React from "react";
import MealCard from "./MealCard";
import useWeeklyMealStore from "../../../store/useWeeklyMealStore";
import useMealTypeStore from "../../../store/useMealTypeStore";

import { create } from "zustand";

const useWeeklyMealStore = create(() => ({
    weeklyMeals: [
        {
            id: 1,
            mealName: "Grilled Chicken Salad",
            description: "Fresh greens with grilled chicken and vinaigrette.",
            longDescription:
                "This Grilled Chicken Salad is a light yet filling meal packed with nutrients and flavor. It features tender, juicy chicken breast seasoned to perfection and served atop a bed of crisp, fresh greens. Complemented by cherry tomatoes, cucumbers, shredded carrots, and a tangy vinaigrette dressing, this salad is ideal for anyone seeking a balanced and refreshing meal. High in protein and low in calories, it provides lasting energy while supporting a healthy lifestyle. Whether enjoyed as a quick lunch or a satisfying dinner, this dish offers a delightful combination of flavors and textures.",
            longDescription2:
                "Perfect for meal prep or on-the-go lunches, this salad remains crisp and flavorful even when prepared in advance. Pair it with whole-grain bread or a fruit smoothie for a complete, nutritious meal that satisfies hunger without weighing you down.",
            calories: 350,
            protein: 30,
            carbohydrate: 12,
            fat: 18,
            dairyFree: true,
            nutsFree: true,
            glutenFree: true,
            deliveryType: "Hot Meal",
            image: "https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/09/Southwest-Salad38461_1400.jpg",
            slug: "grilled-chicken-salad",
        },
        {
            id: 2,
            mealName: "Vegan Buddha Bowl",
            description: "Quinoa, roasted veggies, and tahini dressing.",
            longDescription:
                "The Vegan Buddha Bowl is a colorful, nutrient-dense meal designed to nourish and energize. This plant-based dish features fluffy quinoa as the base, topped with a vibrant mix of roasted vegetables like sweet potatoes, zucchini, and bell peppers. A creamy tahini dressing ties all the components together, providing a rich, nutty flavor that complements the natural sweetness of the vegetables. Perfect for those following a vegan or gluten-free lifestyle, this bowl is high in fiber, vitamins, and minerals. Whether enjoyed warm or chilled, it offers a satisfying balance of taste, texture, and wholesome goodness.",
            longDescription2:
                "This meal is customizable—add your favorite toppings like avocado slices, toasted seeds, or a sprinkle of nutritional yeast for an extra boost of flavor and nutrients. Great for a quick meal or post-yoga treat.",
            calories: 420,
            protein: 15,
            carbohydrate: 48,
            fat: 16,
            dairyFree: true,
            nutsFree: true,
            glutenFree: true,
            deliveryType: "Frozen Meal",
            image: "https://elavegan.com/wp-content/uploads/2021/05/vegan-buddha-bowl-with-chickpeas-avocado-colorful-veggies-and-green-dressing-on-the-side.jpg",
            slug: "vegan-buddha-bowl",
        },
        {
            id: 3,
            mealName: "Spaghetti Bolognese",
            description: "Spaghetti with a hearty meat sauce.",
            longDescription:
                "Spaghetti Bolognese is a timeless classic loved for its hearty and comforting flavors. This dish features al dente spaghetti noodles smothered in a rich and savory meat sauce made from slow-cooked ground beef, ripe tomatoes, onions, garlic, and Italian herbs. Topped with grated Parmesan cheese, it’s the perfect family meal that satisfies the appetite and warms the soul. Each bite is a delightful combination of tender pasta and flavorful sauce. Ideal for a cozy dinner, this meal provides a balanced mix of carbohydrates, protein, and fats, ensuring you feel full and satisfied.",
            longDescription2:
                "For an enhanced dining experience, serve with a side of garlic bread and a green salad. This dish also reheats well, making it a great option for meal prep or leftovers.",
            calories: 600,
            protein: 25,
            carbohydrate: 75,
            fat: 20,
            dairyFree: false,
            nutsFree: true,
            glutenFree: false,
            deliveryType: "Hot Meal",
            image: "https://www.ericlyons.co.uk/wp-content/uploads/2021/06/8K0A7866.jpg",
            slug: "spaghetti-bolognese",
        },
        {
            id: 4,
            mealName: "Beef Stir-fry",
            description: "Beef with vegetables in a savory sauce.",
            longDescription:
                "This Beef Stir-fry is a quick, delicious, and nutritious meal, perfect for any occasion. It features tender strips of beef cooked to perfection, paired with a colorful mix of crisp vegetables such as broccoli, bell peppers, and snap peas. All components are coated in a savory sauce made with soy sauce, garlic, and a hint of ginger, creating a bold and satisfying flavor profile. This dish is gluten-free and dairy-free, making it a versatile choice for various dietary needs. Ideal for a weeknight dinner, it provides a well-balanced meal that’s both wholesome and flavorful.",
            longDescription2:
                "This stir-fry can be served with rice, noodles, or on its own for a low-carb option. Add a sprinkle of sesame seeds or fresh scallions for added texture and flavor.",
            calories: 500,
            protein: 35,
            carbohydrate: 20,
            fat: 25,
            dairyFree: true,
            nutsFree: true,
            glutenFree: true,
            deliveryType: "Frozen Meal",
            image: "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg",
            slug: "beef-stir-fry",
        },
        {
            id: 5,
            mealName: "Tofu Pad Thai",
            description: "Rice noodles, tofu, and tangy sauce.",
            longDescription:
                "Tofu Pad Thai is a delightful fusion of bold flavors and wholesome ingredients. This dish features soft rice noodles stir-fried with cubes of tofu, scrambled eggs, and a vibrant mix of vegetables like bean sprouts, carrots, and green onions. Tossed in a tangy and slightly sweet sauce made with tamarind, soy, and lime juice, it delivers an authentic taste of Thailand. Crushed peanuts add a satisfying crunch, while a hint of chili provides subtle heat. Gluten-free and dairy-free, this meal is perfect for those seeking a satisfying and flavorful plant-based option.",
            longDescription2:
                "This Pad Thai is easily customizable—add shrimp or chicken for a non-vegan option, or swap tofu for tempeh for a unique twist. Serve with lime wedges for an extra citrusy kick.",
            calories: 450,
            protein: 18,
            carbohydrate: 60,
            fat: 15,
            dairyFree: true,
            nutsFree: false,
            glutenFree: true,
            deliveryType: "Hot Meal",
            image: "https://plantbasedonabudget.com/wp-content/uploads/2013/03/Pad-Thai-Inspired-Stir-Fry-Plant-Based-on-a-Budget-1.jpg",
            slug: "tofu-pad-thai",
        },
        {
            id: 6,
            mealName: "Chicken Alfredo",
            description: "Creamy pasta with grilled chicken.",
            longDescription:
                "Chicken Alfredo is a rich and indulgent meal, perfect for satisfying your cravings for comfort food. This dish features tender grilled chicken breast served over fettuccine pasta, all coated in a creamy Alfredo sauce made with butter, heavy cream, and Parmesan cheese. The combination of silky sauce and perfectly cooked pasta makes every bite irresistible. It’s a hearty meal that’s best suited for those looking for a high-calorie, protein-packed dish. Ideal for a family dinner or a special occasion, this classic Italian-inspired meal is sure to please.",
            longDescription2:
                "For a lighter version, substitute the cream sauce with a cauliflower-based alternative or use whole-grain pasta. This dish pairs wonderfully with steamed broccoli or a Caesar salad.",
            calories: 650,
            protein: 40,
            carbohydrate: 50,
            fat: 30,
            dairyFree: false,
            nutsFree: true,
            glutenFree: false,
            deliveryType: "Frozen Meal",
            image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-above.jpg",
            slug: "chicken-alfredo",
        },
        {
            id: 7,
            mealName: "Vegetable Soup",
            description: "Hearty soup with fresh vegetables.",
            longDescription:
                "This Vegetable Soup is a light and nutritious meal that’s perfect for any time of the year. Packed with fresh, seasonal vegetables like carrots, celery, potatoes, and tomatoes, it offers a medley of flavors in every spoonful. The broth is seasoned with herbs like thyme and parsley, adding depth and warmth to the dish. Low in calories but high in fiber, this soup is a great option for a healthy meal that keeps you feeling full and satisfied. Serve it as a starter or enjoy it as a wholesome main dish on its own.",
            longDescription2:
                "Pair with crusty bread or a side salad for a complete meal. This soup freezes well, making it an excellent option for batch cooking and quick reheating on busy days.",
            calories: 200,
            protein: 6,
            carbohydrate: 35,
            fat: 4,
            dairyFree: true,
            nutsFree: true,
            glutenFree: true,
            deliveryType: "Hot Meal",
            image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-09-vegetable-soup%2Fvegetable-soup-104",
            slug: "vegetable-soup",
        },
        {
            id: 8,
            mealName: "Peanut Butter Energy Bowl",
            description: "Oats, peanut butter, and chia seeds.",
            longDescription:
                "The Peanut Butter Energy Bowl is a powerhouse of nutrition, designed to fuel your day. It features a blend of creamy peanut butter, rolled oats, chia seeds, and a touch of honey, creating a naturally sweet and filling meal. This bowl is high in protein, fiber, and healthy fats, making it an excellent choice for breakfast or a post-workout snack. Each spoonful provides a perfect balance of texture and flavor, ensuring satisfaction with every bite. It’s a great option for anyone looking for a quick, energizing meal that supports an active lifestyle.",
            longDescription2:
                " This bowl is customizable—add your favorite toppings like nuts, seeds, or a sprinkle of nutritional yeast for an extra boost of flavor and nutrients. Great for a quick meal or post-yoga treat.",
            calories: 300,
            protein: 12,
            carbohydrate: 28,
            fat: 16,
            dairyFree: true,
            nutsFree: false,
            glutenFree: true,
            deliveryType: "Frozen Meal",
            image: "https://www.noracooks.com/wp-content/uploads/2024/10/PeanutButterEnergyBalls-8.jpg",
            slug: "peanut-butter-energy-bowl",
        },
        {
            id: 9,
            mealName: "Lentil Curry",
            description: "Lentil curry with basmati rice.",
            longDescription:
                "Lentil Curry is a flavorful and hearty meal that’s perfect for plant-based eaters and curry lovers alike. This dish features tender lentils cooked in a fragrant blend of spices, including turmeric, cumin, and coriander, and simmered in a creamy tomato and coconut milk base. Served with fluffy basmati rice, it provides a wholesome and satisfying meal. Packed with plant-based protein, fiber, and complex carbohydrates, this curry is both nutritious and delicious. Whether you’re seeking a warm dinner on a chilly evening or a fulfilling lunch, Lentil Curry is a fantastic choice.",
            longDescription2:
                " Pair it with steamed broccoli or a side salad for a complete and satisfying meal. This curry freezes well, making it an easy option for batch cooking and quick reheating on busy days.",
            calories: 400,
            protein: 18,
            carbohydrate: 50,
            fat: 10,
            dairyFree: true,
            nutsFree: true,
            glutenFree: true,
            deliveryType: "Hot Meal",
            image: "https://cookingforpeanuts.com/wp-content/uploads/2021/09/15-Minute-Lentil-Veggie-Curry-1.jpg",
            slug: "lentil-curry",
        },
        {
            id: 10,
            mealName: "Salmon Teriyaki",
            description: "Grilled salmon with teriyaki sauce.",
            longDescription:
                "Salmon Teriyaki is a delicious and wholesome meal featuring perfectly grilled salmon fillets glazed with a sweet and savory teriyaki sauce. The rich flavor of the salmon is enhanced by the tangy and slightly caramelized teriyaki glaze, creating a delightful balance of taste. High in omega-3 fatty acids, protein, and essential nutrients, this dish is as nutritious as it is flavorful. Serve it with steamed rice and sautéed vegetables for a complete meal that’s both satisfying and elegant. Ideal for a dinner that feels special yet is simple to prepare.",
            longDescription2:
                " This dish freezes well, making it an easy option for batch cooking and quick reheating on busy days.",
            calories: 520,
            protein: 35,
            carbohydrate: 20,
            fat: 25,
            dairyFree: true,
            nutsFree: true,
            glutenFree: true,
            deliveryType: "Frozen Meal",
            image: "https://www.japanesecooking101.com/wp-content/uploads/2023/10/IMG_5965.jpeg",
            slug: "salmon-teriyaki",
        },
    ],
}));


const MealSection = () => {
    const { weeklyMeals } = useWeeklyMealStore();
    const { mealTypes } = useMealTypeStore();

    const currentMealType = mealTypes.find((el) => el.isActive === true);

    return (
        <section>
            <div className=" grid grid-cols-2 gap-10 my-10">
                {weeklyMeals
                    .filter(
                        (el) =>
                            currentMealType.type === "All" ||
                            el.deliveryType === currentMealType.type
                    )
                    .map((weeklyMeal) => (
                        <MealCard key={weeklyMeal.id} weeklyMeal={weeklyMeal} />
                    ))}
            </div>
        </section>
    );
};

export default MealSection;
