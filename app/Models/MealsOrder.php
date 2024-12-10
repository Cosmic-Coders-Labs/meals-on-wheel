<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealsOrder extends Model
{
    use HasFactory;

    protected $table = 'meals_order';

    protected $fillable = [
        'order_id',
        'partner_id',
        'preparation_status',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function partner()
    {
        return $this->belongsTo(Partner::class, 'partner_id');
    }
}
