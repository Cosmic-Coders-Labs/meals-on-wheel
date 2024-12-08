<?php
namespace App\Http\Controllers;

use App\Models\Partner;

class PartnerController extends BaseController
{
    protected $model = Partner::class;

    public function count()
    {
        $count = Partner::count();
        return response()->json(['count' => $count], 200);
    }
}
