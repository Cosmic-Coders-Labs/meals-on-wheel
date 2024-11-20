<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donor extends Model
{
    use HasFactory;

    // Define the table name (optional, if it matches the plural form of the model name)
    protected $table = 'donors';

    // Define the primary key if it's not the default 'id'
    protected $primaryKey = 'DonorID';

    // Specify which attributes should be mass-assignable
    protected $fillable = ['Name', 'Email', 'DonationAmount', 'DonationDate'];

    /**
     * Custom function to get the formatted donation amount.
     * This is useful if you want to display the amount with a currency symbol.
     */
    public function getFormattedDonationAmountAttribute()
    {
        return '$' . number_format($this->DonationAmount, 2); // Format amount as currency
    }

    /**
     * Scope to filter donors by donation amount, e.g., to find large donors.
     */
    public function scopeDonatedMoreThan($query, $amount)
    {
        return $query->where('DonationAmount', '>', $amount); // Get donors who donated more than a specific amount
    }

    /**
     * Scope to filter donors by a specific donation date.
     */
    public function scopeDonatedOnDate($query, $date)
    {
        return $query->where('DonationDate', $date); // Get donors who donated on a specific date
    }
}
