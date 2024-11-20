<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    // Define the table name (optional, if it matches the plural form of the model name)
    protected $table = 'feedbacks';

    // Define the primary key if it's not the default 'id'
    protected $primaryKey = 'FeedbackID';

    // Specify which attributes should be mass-assignable
    protected $fillable = ['FeedbackText', 'Rating', 'FeedbackDate', 'MemberID'];

    // Define the relationship between feedback and the member who gave the feedback
    public function member()
    {
        return $this->belongsTo(Member::class, 'MemberID');
    }

    /**
     * Set the feedback date automatically when creating a feedback
     * This will ensure that the FeedbackDate is always set to today's date.
     */
    protected static function booted()
    {
        static::creating(function ($feedback) {
            if (!$feedback->FeedbackDate) {
                $feedback->FeedbackDate = now()->toDateString(); // Set to today's date in local timezone
            }
        });
    }

    /**
     * Scope to filter feedback by rating.
     */
    public function scopeRatingRange($query, $minRating, $maxRating)
    {
        return $query->whereBetween('Rating', [$minRating, $maxRating]);
    }

    /**
     * Scope to search feedbacks by feedback text.
     */
    public function scopeSearchByFeedbackText($query, $text)
    {
        return $query->where('FeedbackText', 'like', '%' . $text . '%');
    }
}
