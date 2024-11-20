<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Volunteer extends Model
{
    use HasFactory;

    // Define the table name (optional, if it matches the plural form of the model name)
    protected $table = 'volunteers';

    // Define the primary key if it's not the default 'id'
    protected $primaryKey = 'VolunteerID';

    // Specify which attributes should be mass-assignable
    protected $fillable = ['Name', 'Phone', 'Availability', 'AssignedRegion'];

    /**
     * A volunteer may have many deliveries.
     * Define a relationship to the 'Delivery' model.
     */
    public function deliveries()
    {
        return $this->hasMany(Delivery::class, 'VolunteerID');
    }

    /**
     * Custom function to check if the volunteer is available.
     * This could be used to check if a volunteer is available for a delivery.
     */
    public function isAvailable()
    {
        return $this->Availability !== 'On-Call'; // Assuming On-Call volunteers are not immediately available
    }

    /**
     * Custom accessor to get the formatted phone number.
     * For example, you might want to format the phone number.
     */
    public function getFormattedPhoneAttribute()
    {
        // Assuming the phone number is in the format 1234567890, you can format it like this
        return '(' . substr($this->Phone, 0, 3) . ') ' . substr($this->Phone, 3, 3) . '-' . substr($this->Phone, 6);
    }

    /**
     * Define a scope to easily query available volunteers.
     * This could help to get volunteers that are currently available (not On-Call).
     */
    public function scopeAvailable($query)
    {
        return $query->where('Availability', '!=', 'On-Call'); // Get volunteers that are not On-Call
    }
}
