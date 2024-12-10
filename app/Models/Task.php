<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // Specify the custom primary key
    protected $primaryKey = 'task_id';

    // Ensure the model is aware of the table name
    protected $table = 'tasks';

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'name',
        'order_id',
        'status',
        'priority',
    ];

    public static function validationRules()
    {
        return [
            'name' => 'nullable|string',
            'order_id' => 'nullable|exists:orders,order_id',
            'status' => 'nullable|in:available,assigned,completed',
            'priority' => 'nullable|in:low,medium,high',
        ];
    }

    // Define relationships
    public function volunteerAssignments()
    {
        return $this->hasMany(VolunteerAssignment::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'order_id');
    }
}
