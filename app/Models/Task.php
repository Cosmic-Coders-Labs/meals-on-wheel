<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $primarykey = 'task_id';
    protected $table = 'tasks';

    protected $fillable = [
        'name',
        'order_id',
        'status',
        'priority',
    ];

    // Define the relationship with the VolunteerAssignments model
    public function volunteerAssignments()
    {
        return $this->hasMany(VolunteerAssignment::class);
    }

    // Define the relationship with the Order model
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
