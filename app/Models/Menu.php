<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    // Define the table name, if it's different from the plural form of the model name
    protected $table = 'menus';

    // Define the primary key if it's not the default 'id'
    protected $primaryKey = 'MenuID';

    // Specify which attributes should be mass-assignable
    protected $fillable = ['WeekStartDate', 'WeekEndDate', 'NewAttribute', 'MealID'];

    // Define relationships
    public function meal()
    {
        return $this->belongsTo(Meal::class, 'MealID');
    }
}
