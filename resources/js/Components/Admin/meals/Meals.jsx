import React, { useState, useEffect } from "react";
import Dropdown from "@/Components/Dropdown";
import ReusableTable from "@/Components/Table";
import DashboardHeader from "@/Components/DashboardHeader";
import { fetchMeals, addMeal, editMeal, rejectMeal, getMe } from "@/Utils/utils";
import MealFormModal from "@/Components/Forms/MealForm";

const MealsPage = () => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [currentUser, setCurrentUser] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(""); // "add" or "edit"
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    // Fetch meals on component mount
    useEffect(() => {
        const getMeals = async () => {
            try {
                const data = await fetchMeals();
                setMeals(data);
                const userID = await getMe();
                setCurrentUser(userID);
            } catch (error) {
                setError("Failed to fetch meals.");
            }
            setLoading(false);
        };
        getMeals();

    }, []);

    // Handle actions for dropdown
    const handleAction = async (action, meal) => {
        if (action === "View") {
            console.log("View Meal:", meal);
        } else if (action === "Edit") {
            setSelectedMeal(meal);
            setModalType("edit");
            setShowModal(true);
        } else if (action === "Reject") {
            if (window.confirm(`Are you sure you want to reject the meal "${meal.name}"?`)) {
                try {
                    await rejectMeal(meal.meal_id);
                    setMeals((prevMeals) =>
                        prevMeals.filter((m) => m.meal_id !== meal.meal_id)
                    );
                    alert(`Meal "${meal.name}" rejected successfully.`);
                } catch (error) {
                    console.error("Failed to reject meal:", error);
                    alert("Failed to reject meal. Please try again.");
                }
            }
        }
    };

    // Handle form submission for add/edit
    const handleSubmit = async (mealData) => {
        // Ensure price and calories are numbers
        try {
            if (modalType === "add") {
                await addMeal(mealData);
                alert("Meal added successfully.");
            } else if (modalType === "edit") {
                await editMeal(selectedMeal.meal_id, mealData);
                alert("Meal updated successfully.");
            }
            setShowModal(false);
            setSelectedMeal(null);
            // Refresh meals list
            const updatedMeals = await fetchMeals();
            setMeals(updatedMeals.data || updatedMeals);
        } catch (error) {
            console.error("Failed to submit meal data:", error);
            alert("Failed to process meal. Please try again.");
        }
    };


    // Table headers and data mapping
    const tableHeaders = ['ID', 'Name', 'Price', 'Status', 'Dietary', 'Actions'];
    const options = ['View', 'Edit', 'Reject'];

    const tableData = meals.map(meal => [
        meal.meal_id,
        meal.name ? meal.name : 'N/A',  // Assuming member data is nested under 'member'
        meal.price ? meal.price : 0,
        meal.dietary_type ? meal.dietary_type : 'N/A',
        meal.status,
        <Dropdown
            options={options}
            disabled={false}
            onSelect={(action) => handleAction(action, meal)}
        />,
    ]);


    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="Meals"
                actions={[
                    {
                        label: "Add Meal",
                        onClick: () => {
                            setModalType("add");
                            setShowModal(true);
                        },
                        color: "bg-blue-500 hover:bg-blue-600",
                    },
                ]}
            />

            <div className="mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : meals.length > 0 ? (
                    <ReusableTable headers={tableHeaders} data={tableData} page={page} setPage={setPage} showPagination={true} reverse={false} />
                ) : (
                    <div>No meals found.</div>
                )}
            </div>

            {showModal && (
                <MealFormModal
                    modalType={modalType}
                    meal={modalType === "edit" ? selectedMeal : null}
                    onClose={() => setShowModal(false)}
                    onSubmit={handleSubmit}
                    userId={currentUser.id}
                />
            )}
        </div>
    );
};

export default MealsPage;
