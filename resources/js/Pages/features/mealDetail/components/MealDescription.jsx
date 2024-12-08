import React from "react";
import Container from "../../../Components/Container";

const MealDescription = ({ currentMeal: { longDescription, longDescription2 }}) => {
    return (
        <section className=" flex flex-col justify-center bg-accent-500 my-10 py-4">
            <Container className={"container"}>
                <h1 className=" text-2xl font-bold mb-3 font-playfair">
                    Meal Description
                </h1>
                <div className=" grid grid-cols-2 gap-5">
                    <p className="text-slate-100 font-noto">
                        {longDescription}
                    </p>
                    <p className="text-slate-100 font-noto">
                       {longDescription2}
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default MealDescription;
