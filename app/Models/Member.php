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

    public static function validationRules()
    {
        return [
            'eligebility' => 'required|string',
            'needs' => 'required|string',
            'allergies' => 'nullable|string',
            'user_id' => 'nullable|exists:users,id',
        ];
    }

    public function getUser()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
