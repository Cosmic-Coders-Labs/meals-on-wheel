<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use Illuminate\Http\Request;

class DonorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Donor::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'Name' => 'required|string|max:100',
            'Email' => 'required|string|max:100',
            'Address' => 'required|string|max:255',
            'DonationAmount' => 'required|float',
            'DonationDate' => 'required|date',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Donor::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $donor = Donor::findOrFail($id);
        $donor->update($request->all());
        return $donor;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Donor::destroy($id);
        return response()->noContent();
    }
}
