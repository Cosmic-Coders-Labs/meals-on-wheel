<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['member', 'meal', 'caregiver', 'tasks'])->get();
        return response()->json($orders);
    }

    public function getByCaregiver(Request $request, $caregiver_id)
    {
        $orders = Order::with(['member', 'meal', 'caregiver', 'tasks'])
        ->where('caregiver_id', $caregiver_id)
            ->get();

        if ($orders->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No orders found for the given caregiver ID.',
            ], 404);
        }

        return response()->json(json_decode($orders), 200);
    }
    public function show($order_id)
    {
        $order = Order::with(['member', 'meal', 'caregiver', 'tasks', 'member.user', 'member.user.profile'])
        ->where('order_id', $order_id)
            ->get();

        if ($order->isEmpty()) {
            return response()->json(['error' => 'No orders found for the given caregiver ID'], 404);
        }

        return response()->json(json_decode($order), 200);
    }

    public function getByMember(Request $request, $member_id)
    {

        $orders = Order::with(['member', 'meal', 'caregiver', 'tasks'])
        ->where('member_id', $member_id)
            ->get();

        if ($orders->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No orders found for the given member ID.',
            ], 404);
        }

        return response()->json(json_decode($orders), 200);
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
        return response()->json(json_decode($order), 201);
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
        return response()->json(json_decode($order), 200);
    }

    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json(['message' => 'Order deleted successfully']);
    }

    public function updateLocation(Request $request, $order_id)
    {
        $request->validate([
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $order = Order::findOrFail($order_id);
        $order->update([
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
        ]);

        return response()->json(['message' => 'Location updated successfully.'], 200);
    }

}
