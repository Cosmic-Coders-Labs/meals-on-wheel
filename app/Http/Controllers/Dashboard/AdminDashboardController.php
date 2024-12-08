<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\User;
use App\Models\Meal;
use App\Models\Order;
use App\Models\Partner;
use App\Models\Task;

class AdminDashboardController extends Controller
{
    public function index()
    {
        // Aggregate data
        $data = [
            'members_count' => Member::count(),
            'users_count' => User::count(),
            'meals_count' => Meal::count(),
            'orders_count' => Order::count(),
            'partners_count' => Partner::count(),
            'delivery_count' => Task::where('status', 'assigned')->count(),
        ];

        // Return the data as JSON
        return response()->json($data, 200);
    }
}
