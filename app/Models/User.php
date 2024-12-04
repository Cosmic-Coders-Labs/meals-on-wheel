<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'user_id';
    protected $fillable = [
        'email',
        'password',
        'status',
        'latitude',
        'longtitude'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public static function validationRules()
    {
        return [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'status' => 'required|string',
            'latitude' => 'required|numeric',
            'longtitude' => 'required|numeric',
        ];
    }


    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getMember()
    {
        return $this->hasOne(Member::class, 'user_id');
    }

    public function getCaregiver()
    {
        return $this->hasOne(Caregiver::class, 'user_id');
    }

    public function getVolunteer()
    {
        return $this->hasOne(Volunteer::class, 'user_id');
    }

    public function getPartner()
    {
        return $this->hasOne(Partner::class, 'user_id');
    }
}
