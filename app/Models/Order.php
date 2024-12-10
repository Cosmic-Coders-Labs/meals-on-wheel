<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $primaryKey = 'order_id';
    protected $table = 'orders';

    protected $fillable = [
        'member_id',
        'meal_id',
        'caregiver_id',
        'status',
        'total_price',
        'order_date',
        'delivery_date',
        'special_instructions',
        'rejection_reason',
        'latitude',
        'longitude'
    ];

    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    public function meal()
    {
        return $this->belongsTo(Meal::class, 'meal_id');
    }

    public function caregiver()
    {
        return $this->belongsTo(Caregiver::class, 'caregiver_id');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'order_id');
    }
}
