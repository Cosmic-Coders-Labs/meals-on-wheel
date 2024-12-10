import { useState, useEffect } from "react";

const useActivePage = (defaultPage) => {
    const [activePage, setActivePage] = useState(defaultPage);

    useEffect(() => {
        // Load the activePage from localStorage on component mount
        const savedPage = localStorage.getItem("activePage");
        if (savedPage) {
            setActivePage(savedPage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("activePage", activePage);
    }, [activePage]);

    return [activePage, setActivePage];
};

export default useActivePage;
