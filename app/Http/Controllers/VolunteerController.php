<?php
namespace App\Http\Controllers;

use App\Models\Volunteer;

class VolunteerController extends BaseController
{
    protected $model = Volunteer::class;

    public function count()
    {
        $count = Volunteer::count();
        return response()->json(['count' => $count], 200);
    }
}
