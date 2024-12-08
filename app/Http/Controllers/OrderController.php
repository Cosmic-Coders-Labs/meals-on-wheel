<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Task;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['member', 'meal', 'caregiver', 'tasks'])->get();
        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'member_id' => 'required|exists:members,member_id',
            'meal_id' => 'required|exists:meals,meal_id',
            'caregiver_id' => 'nullable|exists:caregivers,caregiver_id',
            'status' => 'in:pending,in-progress,delivered,cancelled',
            'total_price' => 'nullable|numeric',
            'order_date' => 'nullable|date',
            'delivery_date' => 'nullable|date',
            'special_instructions' => 'nullable|string',
            'rejection_reason' => 'nullable|string',
        ]);

        $order = Order::create($validated);
        return response()->json($order, 201);
    }

    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $validated = $request->validate([
            'status' => 'in:pending,in-progress,delivered,cancelled',
            'delivery_date' => 'nullable|date',
            'special_instructions' => 'nullable|string',
            'rejection_reason' => 'nullable|string',
        ]);

        $order->update($validated);
        return response()->json($order);
    }

    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json(['message' => 'Order deleted successfully']);
    }
}
