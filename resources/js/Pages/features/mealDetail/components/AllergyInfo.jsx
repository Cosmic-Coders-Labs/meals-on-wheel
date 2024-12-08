import React from "react";
import Container from "../../../Components/Container";

const AllergyInfo = ({ currentMeal: { dairyFree, nutsFree, glutenFree } }) => {
    return (
        <section className=" flex flex-col justify-center bg-accent-500 mt-10 mb-20 py-4">
            <Container className={"container"}>
                <h1 className=" text-2xl font-bold mb-8 font-playfair">
                    Allergens & Dietary Information
                </h1>
                <div className=" flex flex-col gap-5">
                    <div className=" flex items-center gap-5 font-noto">
                        <p className=" font-bold min-w-[100px]">Allergens:</p>
                        <div className=" flex items-center gap-3">
                            <p
                                className={`${
                                    !glutenFree
                                        ? "text-slate-100 px-3 py-1  bg-red-500"
                                        : "hidden"
                                } rounded-3xl`}
                            >
                                {!glutenFree && "Contains Gluten"}
                            </p>
                            <p
                                className={`${
                                    !dairyFree
                                        ? "text-slate-100 px-3 py-1  bg-red-500"
                                        : "hidden"
                                } rounded-3xl`}
                            >
                                {!dairyFree && "Contains Dairy"}
                            </p>
                            <p
                                className={`${
                                    !nutsFree
                                        ? "text-slate-100 px-3 py-1  bg-red-500"
                                        : "hidden"
                                } rounded-3xl`}
                            >
                                {!nutsFree && "Contains Nuts"}
                            </p>
                        </div>
                    </div>

                    <div className=" flex items-center gap-5 font-noto">
                        <p className=" font-bold min-w-[100px]">Free From:</p>
                        <div className=" flex items-center gap-3">
                            <p
                                className={` ${
                                    glutenFree
                                        ? " px-3 py-1 bg-white rounded-3xl"
                                        : "hidden"
                                } `}
                            >
                                {glutenFree && "Gluten"}
                            </p>
                            <p
                                className={` ${
                                    dairyFree
                                        ? "px-3 py-1 bg-white rounded-3xl"
                                        : "hidden"
                                } `}
                            >
                                {dairyFree && "Dairy"}
                            </p>
                            <p
                                className={` ${
                                    nutsFree
                                        ? "px-3 py-1 bg-white rounded-3xl"
                                        : "hidden"
                                } `}
                            >
                                {nutsFree && "Nuts"}
                            </p>
                        </div>
                    </div>

                    <div className=" flex items-center gap-5 font-noto">
                        <p className=" font-bold min-w-[100px]">
                            Suitable For:
                        </p>
                        <div className=" flex gap-3">
                            <p
                                className={`${
                                    glutenFree
                                        ? "px-3 py-1 rounded-3xl bg-emerald-500 text-slate-100"
                                        : "hidden"
                                }`}
                            >
                                {glutenFree && "Gluten-Free"}
                            </p>
                            <p
                                className={`${
                                    dairyFree
                                        ? "px-3 py-1 rounded-3xl bg-emerald-500 text-slate-100"
                                        : "hidden"
                                }`}
                            >
                                {dairyFree && "Dairy-Free"}
                            </p>
                            <p
                                className={`${
                                    nutsFree
                                        ? "px-3 py-1 rounded-3xl bg-emerald-500 text-slate-100"
                                        : "hidden"
                                }`}
                            >
                                {nutsFree && "Nuts-Free"}
                            </p>
                            <p className=" px-3 py-1 rounded-3xl bg-emerald-500 text-slate-100">
                                Low-Card
                            </p>
                            <p className=" px-3 py-1 rounded-3xl bg-emerald-500 text-slate-100">
                                High Protein Diets
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AllergyInfo;
