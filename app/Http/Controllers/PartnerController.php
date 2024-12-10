<?php
namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    protected $model = Partner::class;

    public function count()
    {
        $count = Partner::count();
        return response()->json(['count' => $count], 200);
    }
    public function index()
    {
        $data = Partner::with('user', 'user.profile')->get();
        return response()->json(json_decode($data), 200);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate(Partner::validationRules());
        $record = Partner::create($validatedData);
        return response()->json(json_decode($record), 201);
    }

    public function show($id)
    {
        $record = Partner::with('user', 'user.profile')->find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        return response()->json(json_decode($record), 200);
    }


    public function update(Request $request, $id)
    {
        $record = Partner::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        $validatedData = $request->validate(Partner::validationRules());
        $record->update($validatedData);
        return response()->json(json_decode($record), 200);
    }

    public function destroy($id)
    {
        $record = Partner::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        $record->delete();
        return response()->json(null, 204);
    }


}
