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
}
