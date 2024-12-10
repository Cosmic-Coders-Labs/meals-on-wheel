<?php

namespace App\Http\Controllers;

use App\Models\MealsOrder;
use Illuminate\Http\Request;

class MealsOrderController extends Controller
{
    public function index()
    {
        $mealsOrders = MealsOrder::with(['order', 'partner'])->get();
        return response()->json($mealsOrders);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,order_id',
            'partner_id' => 'nullable|exists:partners,partner_id',
            'preparation_status' => 'in:pending,in-progress,ready',
        ]);

        $mealsOrder = MealsOrder::create($validated);
        return response()->json($mealsOrder, 201);
    }

    public function update(Request $request, $id)
    {
        $mealsOrder = MealsOrder::findOrFail($id);
        $validated = $request->validate([
            'preparation_status' => 'in:pending,in-progress,ready',
        ]);

        $mealsOrder->update($validated);
        return response()->json($mealsOrder);
    }

    public function destroy($id)
    {
        $mealsOrder = MealsOrder::findOrFail($id);
        $mealsOrder->delete();
        return response()->json(['message' => 'Meals order deleted successfully']);
    }
}
