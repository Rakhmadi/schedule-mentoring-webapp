<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Schedulemigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('m_course',function(Blueprint $table){
            $table->string('course_code',7);
            $table->string('course_name',255);
            $table->enum('course_category',['itc','language','math'])->default(NULL);
            $table->enum('course_level',['basic','intermediate','advance'])->default(NULL);
            $table->timestamps();
            $table->primary('course_code');
        });

        Schema::create('m_mentor',function(Blueprint $table){
            $table->string('mentor_id',10);
            $table->string('mentor_name',255);
            $table->string('gender',10);
            $table->string('phone',20);
            $table->string('address',255);
            $table->string('email',255);
            $table->timestamps();
            $table->primary('mentor_id');
        });

        Schema::create('t_schedule',function(Blueprint $table){
            $table->string('schedule_id',10);
            $table->string('mentor_id',10);
            $table->string('course_code',7);
            $table->date('schedule_date');
            $table->time('start_time');
            $table->time('finish_time');
            $table->timestamps();
            $table->primary('schedule_id');
            $table->foreign('mentor_id')->references('mentor_id')->on('m_mentor');
            $table->foreign('course_code')->references('course_code')->on('m_course');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('m_course','m_mentor','t_schedule');
    }
}
