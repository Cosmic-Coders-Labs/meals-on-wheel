<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $table = 'members';
    protected $primaryKey = 'MemberID';
    protected $fillable = [
        'Name',
        'Age',
        'Address',
        'Phone',
        'DietaryRequirements',
        'RegistrationDate',
        'CaregiverID'
    ];

    public function caregiver()
    {
        return $this->belongsTo(Caregiver::class, 'CaregiverID');
    }

    public function deliveries()
    {
        return $this->hasMany(Delivery::class, 'MemberID');
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class, 'MemberID');
    }

    /**
     * Get the member's full name.
     * Example of an accessor method.
     */
    public function getFullNameAttribute()
    {
        return $this->Name; // Just an example, assuming Name contains full name
    }

    /**
     * Scope to filter members by age range.
     */
    public function scopeAgeRange($query, $minAge, $maxAge)
    {
        return $query->whereBetween('Age', [$minAge, $maxAge]);
    }

    /**
     * Scope to search for members by phone number.
     */
    public function scopeSearchByPhone($query, $phone)
    {
        return $query->where('Phone', 'like', '%' . $phone . '%');
    }

    /**
     * Scope to filter members by registration date.
     */
    public function scopeRegisteredAfter($query, $date)
    {
        return $query->where('RegistrationDate', '>', $date);
    }
}
