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

    public function mentor(){
        return $this->belongsTo(Mentor::class,'mentor_id','mentor_id');
    }

    public function course(){
        return $this->belongsTo(Course::class,'course_code','course_code');
    }
}
