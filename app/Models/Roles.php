<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    use HasFactory;
    protected $table = 'roles';
    protected $fillable = ['name', 'description'];

    public static function validationRules()
    {
        return [
            'name' => 'required|string|unique:roles,name',
            'description' => 'required|string',
        ];
    }


    public function getUser()
    {
        return $this->belongsToMany(User::class, 'user_with_roles', 'role_id');
    }

    public function findByName(string $name)
    {
        return $this->where('name', $name);
    }
}
