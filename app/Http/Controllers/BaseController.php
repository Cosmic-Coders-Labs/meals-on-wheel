<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    protected $model;

    public function index()
    {
        return response()->json($this->model::all(), 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate($this->model::validationRules());
        $record = $this->model::create($validatedData);
        return response()->json($record, 201);
    }

    public function show($id)
    {
        $record = $this->model::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        return response()->json($record, 200);
    }

    public function update(Request $request, $id)
    {
        $record = $this->model::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        $validatedData = $request->validate($this->model::validationRules());
        $record->update($validatedData);
        return response()->json($record, 200);
    }

    public function destroy($id)
    {
        $record = $this->model::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        $record->delete();
        return response()->json(null, 204);
    }
}
