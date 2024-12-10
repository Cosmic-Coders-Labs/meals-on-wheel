<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CertificatesController extends Controller
{
    protected $model = Certificate::class;


    public function getCertificatesByPartner($partnerId)
    {
        $certificates = Certificate::where('partner_id', $partnerId)->get()->map(function ($certificate) {
            $certificate->image = $certificate->image ? asset('storage/' . $certificate->image) : null;
            return $certificate;
        });

        return response()->json($certificates, 200);
    }


    public function index()
    {
        $certificates = Certificate::all()->map(function ($certificate) {
            $certificate->image = $certificate->image ? asset('storage/' . $certificate->image) : null;
            return $certificate;
        });

        return response()->json($certificates, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate(Certificate::validationRules());

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('Certificates', 'public');
        }

        $certificate = Certificate::create($validated);
        return response()->json($certificate, 201);
    }
    public function show($id)
    {
        $certificate = Certificate::find($id);

        if (!$certificate) {
            return response()->json(['error' => 'Certificate not found'], 404);
        }

        return response()->json($certificate, 200);
    }
    public function update(Request $request, $id)
    {
        $certificate = Certificate::find($id);

        if (!$certificate) {
            return response()->json(['error' => 'Certificate not found'], 404);
        }

        $validated = $request->validate(Certificate::validationRules());

        if ($request->hasFile('image')) {
            if ($certificate->image) {
                Storage::disk('public')->delete($certificate->image);
            }
            $validated['image'] = $request->file('image')->store('Certificates', 'public');
        }

        $certificate->update($validated);
        return response()->json($certificate, 200);
    }

    public function destory($id)
    {
        $certificate = Certificate::find($id);

        if (!$certificate) {
            return response()->json(['error' => 'Certificate not found'], 404);
        }

        if ($certificate->image) {
            Storage::disk('public')->delete($certificate->image);
        }

        $certificate->delete();

        return response()->json(null, 204);
    }
}
