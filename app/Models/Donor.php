<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donor extends Model
{
    use HasFactory;

    // The table associated with the model
    protected $table = 'donors';

    // The attributes that are mass assignable
    protected $fillable = [
        'donor_name',
        'contact_number',
        'email',
        'user_id',
    ];

    // Define the relationship with the User model (if needed)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Define the relationship with the Donation model
    public function donations()
    {
        return $this->hasMany(Donation::class, 'donor_id', 'donor_id');
    }
}
