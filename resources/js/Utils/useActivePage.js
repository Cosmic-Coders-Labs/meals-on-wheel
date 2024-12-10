import { useState, useEffect } from "react";

const useActivePage = (defaultPage) => {
    const [activePage, setActivePage] = useState(defaultPage);

    useEffect(() => {
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
