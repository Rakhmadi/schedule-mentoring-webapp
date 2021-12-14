<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    protected $table = 't_schedule';
    protected $fillable = [
        "schedule_id",
        "mentor_id",
        "course_code",
        "schedule_date",
        "start_time",
        "finish_time"
    ];
}
