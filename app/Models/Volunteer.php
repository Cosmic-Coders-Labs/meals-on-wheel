<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Volunteer extends Model
{
    use HasFactory;
    protected $primaryKey = 'volunteer_id';
    protected $fillable = [
        'volunteer_name',
        'volunteer_role',
        'user_id'
    ];

    public static function validationRules()
    {
        return [
            'volunteer_name' => 'required|string',
            'volunteer_role' => 'required|string',
            'user_id' => 'nullable|exists:users,id',
        ];
    }


    public function getUser()
    {
        return $this->belongsTo(User::class);
    }
}
