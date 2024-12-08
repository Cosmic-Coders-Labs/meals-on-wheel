import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Container from "../../../Components/Container";
import GetMealTitle from "../components/GetMealTitle";
import MealSection from "../components/MealSection";
import FilterMealTypeAndAllergySection from "../components/FilterMealTypeAndAllergySection";

const WeeklyMealPlanPage = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />

            <Container className={"container"}>
                <GetMealTitle />
                <FilterMealTypeAndAllergySection />
                <MealSection />
            </Container>

            <Footer />
        </section>
    );
};

export default WeeklyMealPlanPage;
