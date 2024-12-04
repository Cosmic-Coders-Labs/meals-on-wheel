<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;
    protected $primaryKey = 'meal_id';
    protected $fillable = [
        'name',
        'ingredients',
        'image',
        'preparation_time',
        'status',
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
            'status' => 'required|string',
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
