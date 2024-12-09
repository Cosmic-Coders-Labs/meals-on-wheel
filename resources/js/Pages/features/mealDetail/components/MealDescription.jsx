import React from "react";
import Container from "../../../Components/Container";

const MealDescription = ({ currentMeal: { longDescription, longDescription2 }}) => {
    return (
        <section className=" flex flex-col justify-center bg-secondary-400 my-10 py-4">
            <Container className={"container px-10 md:px-0 xl:px-10"}>
                <h1 className=" text-xl md:text-2xl font-bold mb-5 font-playfair">
                    Meal Description
                </h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 text-sm md:text-base">
                    <p className="text-white  font-noto">{longDescription}</p>
                    <p className=" text-white font-noto">{longDescription2}</p>
                </div>
            </Container>
        </section>
    );
};

export default MealDescription;
