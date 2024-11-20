<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    // Define the table name, if it's different from the plural form of the model name
    protected $table = 'partners';

    // Define the primary key if it's not the default 'id'
    protected $primaryKey = 'PartnerID';

    // Specify which attributes should be mass-assignable
    protected $fillable = ['Name', 'ContactPerson', 'Phone', 'Email', 'Address'];

    /**
     * A partner has many meals.
     * Defining a relationship to the 'Meal' model.
     */
    public function meals()
    {
        return $this->hasMany(Meal::class, 'PartnerID');
    }

    /**
     * Custom function to check if the partner has a valid phone number.
     * For example, you might want to check if the phone number is valid.
     */
    public function hasValidPhoneNumber()
    {
        return preg_match('/^\d{10}$/', $this->Phone); // Example regex for valid phone number
    }

    /**
     * Custom accessor to get the full address formatted properly.
     */
    public function getFullAddressAttribute()
    {
        return $this->Address; // You can customize this to format or append extra information
    }

    /**
     * Define a scope to easily query active partners.
     * You might want to query only partners who are "active" or meet some condition.
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active'); // Assuming there's a 'status' column in your table
    }
}
