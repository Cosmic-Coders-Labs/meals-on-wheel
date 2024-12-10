<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;
    protected $primaryKey = 'partner_id';

    protected $fillable = [
        'partner_name',
        'partner_registered_by',
        'address',
        'business_license',
        'business_type',
        'user_id',
    ];

    public static function validationRules()
    {
        return [
            'partner_name' => 'required|string',
            'partner_registered_by' => 'required|string',
            'address' => 'required|string',
            'business_license' => 'required|string',
            'business_type' => 'required|string',
            'user_id' => 'required|exists:users,user_id',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function certificates()
    {
        return $this->hasMany(Certificate::class);
    }
}
