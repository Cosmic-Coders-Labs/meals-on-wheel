<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use App\Models\Donor;
use Illuminate\Http\Request;

class DonationController extends BaseController
{
    protected $model = Donation::class;

    public function store(Request $request)
    {
        $validated = $request->validate([
            'donor_id' => 'required|exists:donors,donor_id', // Ensure this matches your schema
            'currency' => 'required|string|max:3', // Optional: validate specific currencies
            'amount' => 'required|numeric|min:1',
            'message' => 'nullable|string|max:500',
        ]);

        Donation::create([
            'donor_id' => $validated['donor_id'],
            'amount' => $validated['amount'],
            'currency' => $validated['currency'],
            'message' => $validated['message'] ?? null,
            'status' => 'completed',
        ]);

        return response()->json(['success' => true, 'message' => 'Donation submitted successfully!']);
    }

    public function showByDonorId(Request $request, $donor_id)
    {
        $donations = Donation::where('donor_id', $donor_id)->get();

        if ($donations->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No donation found for the given donor ID.',
            ], 404);
        }

        return response()->json($donations);
    }
}
