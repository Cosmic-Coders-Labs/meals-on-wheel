<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CaregiversToMembers extends Model
{
    public static function validationRules()
    {
        return [
            'caregiver_id' => 'required|exists:caregivers,caregiver_id',
            'member_id' => 'required|exists:members,member_id',
        ];
    }
}
