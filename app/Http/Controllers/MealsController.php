<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MealsController extends Controller
{
    /**
     * Display a listing of meals (API response).
     */
    public function apiIndex()
    {
        $meals = Meal::all()->map(function ($meal) {
            $meal->image = $meal->image ? asset('storage/' . $meal->image) : null;
            return $meal;
        });

        return response()->json($meals, 200);
    }

    /**
     * Display a listing of meals (Inertia response).
     */
    public function inertiaIndex()
    {
        $meals = Meal::all()->map(function ($meal) {
            $meal->image = $meal->image ? asset('storage/' . $meal->image) : null;
            return $meal;
        });

        return Inertia::render('Meals/Index', [
            'meals' => $meals,
        ]);
    }

    /**
     * Store a newly created meal (API).
     */

    public function apiStore(Request $request)
    {
        $validated = $request->validate(Meal::validationRules());

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('meals', 'public');
        }

        $meal = Meal::create($validated);
        return response()->json($meal, 201);
    }


    /**
     * Store a newly created meal (Inertia).
     */
    public function inertiaStore(Request $request)
    {
        $validated = $request->validate(Meal::validationRules());

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('meals', 'public');
        }

        Meal::create($validated);

        return redirect()->route('meals.index')->with('success', 'Meal created successfully!');
    }

    /**
     * Display the specified meal (API).
     */
    public function apiShow($id)
    {
        $meal = Meal::find($id);

        if (!$meal) {
            return response()->json(['error' => 'Meal not found'], 404);
        }

        return response()->json($meal, 200);
    }

    /**
     * Display the specified meal (Inertia).
     */
    public function inertiaShow($id)
    {
        $meal = Meal::find($id);

        if (!$meal) {
            abort(404, 'Meal not found');
        }

        return Inertia::render('Public/MealsDetails', [
            'meal' => [
                'id' => $meal->meal_id,
                'name' => $meal->name,
                'ingredients' => $meal->ingredients,
                'short_description' => $meal->short_description,
                'long_description' => $meal->long_description,
                'image' => $meal->image ? Storage::url($meal->image) : null, // Full image URL
                'calories' => $meal->calories,
                'allergens' => $meal->allergens,
                'status' => $meal->status,
                'price' => $meal->price,
                'delivery_type' => $meal->delivery_type,
                'dietary_type' => $meal->dietary_type,
            ],
        ]);
    }

    /**
     * Update the specified meal (API).
     */
    public function apiUpdate(Request $request, $id)
    {
        $meal = Meal::find($id);

        if (!$meal) {
            return response()->json(['error' => 'Meal not found'], 404);
        }

        $validated = $request->validate(Meal::validationRules());

        if ($request->hasFile('image')) {
            if ($meal->image) {
                Storage::disk('public')->delete($meal->image);
            }
            $validated['image'] = $request->file('image')->store('meals', 'public');
        }

        $meal->update($validated);
        return response()->json($meal, 200);
    }

    /**
     * Update the specified meal (Inertia).
     */
    public function inertiaUpdate(Request $request, $id)
    {
        $meal = Meal::find($id);

        if (!$meal) {
            abort(404, 'Meal not found');
        }

        $validated = $request->validate(Meal::validationRules());

        if ($request->hasFile('image')) {
            if ($meal->image) {
                Storage::disk('public')->delete($meal->image);
            }
            $validated['image'] = $request->file('image')->store('meals', 'public');
        }

        $meal->update($validated);

        return redirect()->route('meals.index')->with('success', 'Meal updated successfully!');
    }

    /**
     * Remove the specified meal (API).
     */
    public function apiDestroy($id)
    {
        $meal = Meal::find($id);

        if (!$meal) {
            return response()->json(['error' => 'Meal not found'], 404);
        }

        if ($meal->image) {
            Storage::disk('public')->delete($meal->image);
        }

        $meal->delete();

        return response()->json(null, 204);
    }

    /**
     * Remove the specified meal (Inertia).
     */
    public function inertiaDestroy($id)
    {
        $meal = Meal::find($id);

        if (!$meal) {
            abort(404, 'Meal not found');
        }

        if ($meal->image) {
            Storage::disk('public')->delete($meal->image);
        }

        $meal->delete();

        return redirect()->route('meals.index')->with('success', 'Meal deleted successfully!');
    }
}
