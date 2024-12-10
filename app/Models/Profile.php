<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $primaryKey = 'profile_id';
    protected $table = 'profile';

    protected $fillable = [
        'first_name',
        'last_name',
        'age',
        'gender',
        'birthday',
        'contact_number',
        'address',
    ];
    public static function validationRules()
    {
        return [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'age' => 'required|integer|min:0',
            'gender' => 'required|string',
            'birthday' => 'required|date',
            'contact_number' => 'required|string',
            'address' => 'required|string',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
