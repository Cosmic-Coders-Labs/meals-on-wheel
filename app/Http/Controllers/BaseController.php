<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    protected $model;

    /**
     * Get all resources.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $data = $this->model::all();
        return response()->json(json_decode($data), 200);
    }

    public function count()
    {
        $data = $this->model::count();
        return response()->json(json_decode($data), 200);
    }

    /**
     * Store a new resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate($this->model::validationRules());
        $record = $this->model::create($validatedData);
        return response()->json(json_decode($record), 201);
    }

    /**
     * Show a single resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $record = $this->model::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        return response()->json(json_decode($record), 200);
    }

    /**
     * Update a resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $record = $this->model::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        $validatedData = $request->validate($this->model::validationRules());
        $record->update($validatedData);
        return response()->json(json_decode($record), 200);
    }

    /**
     * Delete a resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $record = $this->model::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        $record->delete();
        return response()->json(null, 204);  // No content
    }


}
