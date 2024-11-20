<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    // Define the table name (optional, if it matches the plural form of the model name)
    protected $table = 'meals';

    // Define the primary key if it's not the default 'id'
    protected $primaryKey = 'MealID';

    // Specify which attributes should be mass-assignable
    protected $fillable = ['MealName', 'Ingredients', 'Calories', 'PreparationTime', 'PartnerID'];

    /**
     * Get the partner that owns the meal.
     * This defines the relationship between the 'meals' and 'partners' table.
     */
    public function partner()
    {
        return $this->belongsTo(Partner::class, 'PartnerID');
    }

    /**
     * Custom function to get the preparation time in hours and minutes format.
     * This is useful for displaying more readable prep time.
     */
    public function getFormattedPreparationTimeAttribute()
    {
        $hours = floor($this->PreparationTime / 60);
        $minutes = $this->PreparationTime % 60;
        return $hours . ' hours ' . $minutes . ' minutes'; // Example output: "1 hours 30 minutes"
    }

    /**
     * Scope to filter meals by calories range.
     */
    public function scopeCalorieRange($query, $minCalories, $maxCalories)
    {
        return $query->whereBetween('Calories', [$minCalories, $maxCalories]);
    }

    /**
     * Scope to search meals by name.
     */
    public function scopeSearchByName($query, $name)
    {
        return $query->where('MealName', 'like', '%' . $name . '%');
    }
}
