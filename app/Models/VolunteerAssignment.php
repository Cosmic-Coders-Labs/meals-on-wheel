<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VolunteerAssignment extends Model
{
    use HasFactory;
    protected $primaryKey = 'assignment_id';
    protected $table = 'volunteer_assignments';

    protected $fillable = [
        'task_id',
        'volunteer_id',
        'assigned_at',
        'completed_at',
        'status',
    ];

    // Define the relationship with the Task model
    public function task()
    {
        return $this->belongsTo(Task::class, 'task_id', 'task_id');
    }


    // Define the relationship with the Volunteer model
    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class, 'volunteer_id');
    }
}
