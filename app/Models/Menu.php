<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $primaryKey = 'menu_id';
    protected $table = 'menu';

    protected $fillable = [
        'menu_name',
        'available_from',
        'available_until',
        'meal_id',
        'purposed_by',
    ];



    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'purposed_by');
    }
}
