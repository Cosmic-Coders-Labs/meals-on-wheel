<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donor extends Model
{
    use HasFactory;
    protected $primaryKey = 'donor_id';
    // The table associated with the model
    protected $table = 'donors';

    // The attributes that are mass assignable
    protected $fillable = [
        'donor_name',
        'contact_number',
        'email',
        'card_number',
        'secret_number',
        'user_id',
    ];



    // Define the relationship with the Donation model
    public function donations()
    {
        return $this->hasMany(Donation::class, 'donor_id', 'donor_id');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
