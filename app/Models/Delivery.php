<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;

    // Define the table associated with the model
    protected $table = 'deliveries';

    // Define the fillable fields
    protected $fillable = [
        'DeliveryDate',
        'DeliveryStatus',
        'MemberID',
        'VolunteerID',
    ];

    // Define the cast for 'DeliveryDate' to ensure it is properly handled as a date
    protected $casts = [
        'DeliveryDate' => 'date',
    ];

    // Define relationships

    /**
     * Get the member associated with the delivery.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'MemberID');
    }

    /**
     * Get the volunteer associated with the delivery.
     */
    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class, 'VolunteerID');
    }
}
