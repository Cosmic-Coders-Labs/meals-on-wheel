<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    protected $table = 'donations';
    protected $primaryKey = 'donation_id';

    protected $fillable = [
        'donor_id',
        'currency',
        'amount',
        'message',
        'status',
    ];

    public static function validationRules()
    {
        return [
            'donor_id' => 'required|exists:donors,donor_id',
            'currency' => 'required|string',
            'amount' => 'required|numeric|min:1',
            'message' => 'nullable|string',
            'status' => 'required|in:pending,completed',
        ];
    }

    public function donor()
    {
        return $this->belongsTo(Donor::class, 'donor_id', 'donor_id');
    }
}
