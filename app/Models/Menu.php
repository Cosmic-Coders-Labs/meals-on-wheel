<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'week_start_date',
        'week_end_date',
        'meal_id',
        'purposed_by',
    ];

    public static function validationRules()
    {
        return [
            'week_start_date' => 'nullable|integer',
            'week_end_date' => 'nullable|integer',
            'meal_id' => 'required|exists:meals,meal_id',
            'purposed_by' => 'nullable|exists:users,id',
        ];
    }


    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'purposed_by');
    }
}
