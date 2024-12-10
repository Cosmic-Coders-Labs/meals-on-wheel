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
        'short_description',
        'long_description',
        'ingredients',
        'image',
        'allergens',
        'reason_for_rejection',
        'status',
        'price',
        'delivery_type',
        'dietary_type',
        'calories',
        'user_id',
    ];

    protected $casts = [
        'ingredients' => 'array',
        'allergens' => 'array',
    ];

    public static function validationRules()
    {
        return [
            'name' => 'required|string|max:255',
            'ingredients' => 'required|array|min:1', // Validate as array
            'ingredients.*' => 'string|max:255',
            'allergens' => 'nullable|array', // Validate allergens as array
            'allergens.*' => 'string|max:255',
            'short_description' => 'required|string|max:500',
            'long_description' => 'required|string',
            'image' => 'nullable|file|image|mimes:jpeg,png,jpg,gif|max:5000',
            'reason_for_rejection' => 'nullable|string|max:255',
            'status' => 'required|string|in:available,unavailable',
            'price' => 'required|numeric|min:0',
            'delivery_type' => 'required|string|in:hot-meal,frozen-meal',
            'dietary_type' => 'required|string|in:vegetarian,vegan,gluten-free,dairy,nuts,none',
            'calories' => 'required|numeric|min:0|max:5000',
            'user_id' => 'required|exists:users,id',
        ];
    }



    public function menu()
    {
        return $this->hasMany(Menu::class);
    }
}
