<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{
    use HasFactory;

    protected $table = 'm_mentor';
    protected $fillable = [
        "mentor_id",
        "mentor_name",
        "gender",
        "phone",
        "address",
        "email"
    ];
}
