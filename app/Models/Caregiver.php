<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caregiver extends Model
{
    use HasFactory;

    // Define the table name (optional, if it matches the plural form of the model name)
    protected $table = 'caregivers';

    // Define the primary key if it's not the default 'id'
    protected $primaryKey = 'CaregiverID';

    // Specify which attributes should be mass-assignable
    protected $fillable = ['Name', 'Phone', 'Address', 'RelationshipToMember'];

    /**
     * Define a relationship to the 'Member' model.
     * A caregiver is associated with a member, so this can define a 'belongsTo' relationship.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'MemberID'); // Assuming caregivers belong to a member
    }

    /**
     * Custom function to format the caregiver's phone number.
     * For example, you might want to format the phone number for display purposes.
     */
    public function getFormattedPhoneAttribute()
    {
        // Assuming the phone number is in the format 1234567890, format it as (123) 456-7890
        return '(' . substr($this->Phone, 0, 3) . ') ' . substr($this->Phone, 3, 3) . '-' . substr($this->Phone, 6);
    }

    /**
     * Define a scope to filter caregivers who are related to a specific member.
     * This could be useful to find caregivers associated with a member.
     */
    public function scopeForMember($query, $memberId)
    {
        return $query->where('MemberID', $memberId); // Get caregivers for a specific member
    }
}
