import { create } from "zustand";

const useMealTypeStore = create((set) => ({
    mealTypes: [
        { id: 0, type: "All", isActive: true },
        { id: 1, type: "Hot Meal", isActive: false },
        { id: 2, type: "Frozen Meal", isActive: false },
    ],
    activeMealType: (typeId) =>
        set((state) => ({
            mealTypes: state.mealTypes.map((el) =>
                el.id === typeId
                    ? { ...el, isActive: true }
                    : { ...el, isActive: false }
            ),
        })),
}));

export default useMealTypeStore;
