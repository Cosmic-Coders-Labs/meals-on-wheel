import React, { useState, useEffect } from 'react';
import Overview from '../overview/overview';
import Dropdown from '@/Components/Dropdown';
import ReusableTable from '@/Components/Table';
import { fetchMeals } from '@/Utils/utils';
import DashboardHeader from '@/Components/DashboardHeader';
const MealsPage = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        // Fetch meals
        const getMeals = async () => {
            try {
                const data = await fetchMeals();
                setMeals(data);
            } catch (error) {
                setError("Failed to fetch meals.");
            }
            setLoading(false);
        };
        getMeals();
    }, []);



    const tableHeaders = ['Select', 'ID', 'Name', 'Price', 'Status', 'Dietary', 'Actions'];
    const options = ['View', 'Edit', 'Reject'];

    const tableData = meals.map(meal => [
        <input type="checkbox" className="form-checkbox" />,
        meal.id,
        meal.name ? meal.name : 'N/A',  // Assuming member data is nested under 'member'
        meal.price ? meal.price : 0,
        meal.dietary_type,
        meal.status,
        <Dropdown options={options} disabled={false} />
    ]);

    return (
        <div className="flex-1 w-full">
            <MealsTable tableHeaders={tableHeaders} tableData={tableData} />
            <br />
        </div>
    );
};

// Recent Orders Component
const MealsTable = ({ tableHeaders, tableData }) => {
    const [page, setPage] = useState(0);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="Meals"
                actions={[
                    { label: "Add", onClick: () => console.log('add'), color: "bg-blue-500 hover:bg-blue-600" },
                    { label: "Edit", onClick: () => console.log('edit'), color: "bg-yellow-500 hover:bg-yellow-600" },
                    { label: "Delete", onClick: () => console.log('delete'), color: "bg-red-500 hover:bg-red-600" },
                ]}
            />

            {/* Page Content */}
            <div className="mt-6">
                <ReusableTable headers={tableHeaders} data={tableData} page={page} setPage={setPage} showPagination={true} />
            </div>
        </div>
    );
};

export default MealsPage;
