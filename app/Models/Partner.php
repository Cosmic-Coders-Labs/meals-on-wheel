<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $fillable = [
        'partner_name',
        'partner_registered_by',
        'address',
        'business_license',
        'business_type',
        'user_id',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
