<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users';
    protected $fillable = [
        'email',
        'password',
        'status',
        'latitude',
        'longitude'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Define relationships
    public function caregiver()
    {
        return $this->hasOne(Caregiver::class);
    }

    public function member()
    {
        return $this->hasOne(Member::class);
    }

    public function partner()
    {
        return $this->hasOne(Partner::class);
    }

    public function volunteer()
    {
        return $this->hasOne(Volunteer::class);
    }


    public function caregivers()
    {
        return $this->belongsToMany(User::class, 'caregivers_to_members', 'member_id', 'caregiver_id');
    }

    public function donor()
    {
        return $this->hasOne(Donor::class);
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_with_roles', 'user_id', 'role_id');
    }

    public function hasRole($role)
    {
        return $this->roles()->where('name', $role)->exists();
    }

    public function assignRole($roleName)
    {
        $role = Role::where('name', $roleName)->first();

        if ($role) {
            $this->roles()->attach($role->id);
        } else {
            throw new \Exception("Role '{$roleName}' does not exist.");
        }
    }


}
