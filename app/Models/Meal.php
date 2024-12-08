<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;
    protected $table = 'meals';
    protected $primaryKey = 'meal_id';
    protected $fillable = [
        'name',
        'ingredients',
        'image',
        'reason_for_rejection',
        'status',
        'price',
        'dietary_type',
        'calories',
        'user_id',
    ];

    public static function validationRules()
    {
        return [
            'name' => 'required|string',
            'ingredients' => 'required|string',
            'image' => 'required|string',
            'reason_for_rejection' => 'nullable|string',
            'status' => 'required|string',
            'price' => 'required|numeric',
            'dietary_type' => 'required|in:vegetarian,vegan,gluten-free,none',
            'calories' => 'required|numeric',
            'user_id' => 'required|exists:users,id',
        ];
    }


    public function menu()
    {
        return $this->hasMany(Menu::class);
    }
}
