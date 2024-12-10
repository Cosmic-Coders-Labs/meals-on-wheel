<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;
    protected $table = 'certificates';

    protected $fillable = [
        'title',
        'subtitle',
        'expire_date',
        'status',
        'image',
        'partner_id',
    ];

    public static function validationRules()
    {
        return [
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'expire_date' => 'required|date',
            'status' => 'nullable|in:pending,approved,rejected',
            'image' => 'nullable|file|image|mimes:jpeg,png,jpg,gif|max:5000',
            'partner_id' => 'required|exists:partners,partner_id',
        ];
    }

    public function partner()
    {
        return $this->belongsTo(Partner::class, 'partner_id', 'partner_id');
    }
}
