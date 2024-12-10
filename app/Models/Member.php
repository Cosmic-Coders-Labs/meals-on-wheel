<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    protected $table = 'members';
    protected $primaryKey = 'member_id';
    protected $fillable = ['eligebility', 'needs', 'allergies', 'user_id'];


    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function caregivers()
    {
        return $this->belongsToMany(Caregiver::class, 'caregivers_to_members', 'caregiver_id', 'member_id');
    }


    public function caregiversToMembers()
    {
        return $this->hasMany(CaregiversToMembers::class, 'member_id', 'member_id');
    }


}
