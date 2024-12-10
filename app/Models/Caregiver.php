<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caregiver extends Model
{
    use HasFactory;
    protected $primaryKey = 'caregiver_id';
    protected $fillable = ['user_id'];

    public static function validationRules()
    {
        return [
            'user_id' => 'nullable|exists:users,id',
        ];
    }


    public function members()
    {
        return $this->belongsToMany(Member::class, 'caregivers_to_members', 'caregiver_id', 'member_id');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function caregiversToMembers()
    {
        return $this->hasMany(CaregiversToMembers::class, 'caregiver_id', 'caregiver_id');
    }
}
