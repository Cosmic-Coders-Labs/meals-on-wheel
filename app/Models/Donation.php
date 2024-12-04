<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;
    protected $primaryKey = 'donation_id';
    protected $fillable = [
        'donator_id',
        'email',
        'currency',
        'amount',
        'message',
        'status',
    ];

    public static function validationRules()
    {
        return [
            'donator_id' => 'required|string',
            'email' => 'required|email',
            'currency' => 'required|string',
            'amount' => 'required|numeric|min:0.01',
            'message' => 'nullable|string',
            'status' => 'required|string',
        ];
    }
}
