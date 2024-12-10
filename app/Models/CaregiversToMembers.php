<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CaregiversToMembers extends Model
{
    protected $fillable = ['caregiver_id', 'member_id'];
    protected $table = 'caregivers_to_members';

    public static function validationRules()
    {
        return [
            'caregiver_id' => 'required|exists:caregivers,caregiver_id',
            'member_id' => 'required|exists:members,member_id',
        ];
    }

    public function caregiver()
    {
        return $this->belongsTo(Caregiver::class, 'caregiver_id');
    }

    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }
}
