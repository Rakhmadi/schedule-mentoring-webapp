<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Mentor;
use App\Models\Schedule;
class AppController extends Controller
{

    public function createCourse(Request $r){
        $val = Validator::make($r->all(),[
            'course_name' => 'required',
            'course_category' => 'required|in:itc,language,math',
            'course_level' => 'required|in:basic,intermediate,advance'
        ]);
        
        if (!$val->fails()) {
            $randCodeCourse = Str::random(6);
            Course::create([
                'course_code' => $randCodeCourse,
                'course_name' => $r->course_name,
                'course_category' => $r->course_category,
                'course_level' => $r->course_level
            ]);
            return response()->json([
                'msg' => 'course created',
                'code_course' => $randCodeCourse
            ],200);
        }else{
            return response()->json($val->errors(),400);
        }
    }

    public function deleteCourse($course_code){
        $x = Course::where('course_code',$course_code);

        if ($x->exists()) {
            if ($x->delete()) {
                return response()->json([
                    'msg'=>'success'
                ],200);
            }else{
                return response()->json([
                    'msg'=>'err'
                ],500);
            }
        }else{
            return response()->json([
                'msg'=>'course not found'
            ],400);
        }
    }

    public function singleCourse($id){
        Course::where('course_code')->get();

    }

    public function showCourse(){
        $x = Course::orderBy('created_at','DESC')->get();
        return response()->json($x,200);
    }

    public function updateCourse(Request $r, $course_code){
        $x = Course::where('course_code',$course_code)->update($r->all());
        if ($x) {
            return response()->json([
                "msg" => "success"
            ],200);
        }else{
            return response()->json([
                "msg" => "err"
            ],500);
        }
    }

    public function showMentor(){
        $x = Mentor::all();
        return response()->json($x,200);
    }

    public function createMentor(Request $r){
        $val = Validator::make($r->all(),[
            "mentor_name" => 'required',
            "gender" => 'required',
            "phone" => 'required',
            "address" => 'required',
            "email" => 'required|email'
        ]);
        $raandCode = Str::random(6);
        if (!$val->fails()) {
            Mentor::create([
                'mentor_id' => $raandCode,
                'mentor_name' => $r->mentor_name,
                'gender' => $r->gender,
                'phone' => $r->phone,
                'address' => $r->address,
                'email' => $r->email
            ]);
            return response()->json([
                'msg' => 'success',
                'mentor_id' => $raandCode
            ]);
        }else{
            return response()->json($val->errors(),400);
        }
    }

    public function deleteMentor($mentor_id){
        $x = Mentor::where('mentor_id',$mentor_id);
        if ($x->exists()) {
            $x->delete();
            return response()->json([
                'msg' => 'success',
            ]);
        }else{
            return response()->json([
                'msg' => 'fail',
            ],400); 
        }
    }

    public function updateMentor(Request $r, $mentor_id){
        $x = Mentor::where('mentor_id',$mentor_id)->update($r->all());
        if ($x) {
            return response()->json([
                "msg" => "success"
            ],200);
        }else{
            return response()->json([
                "msg" => "err"
            ],500);
        }
    }

    public function createSchedule(Request $r){
        $val = Validator::make($r->all(),[
            'mentor_id' => 'required',
            'course_code' => 'required',
            'schedule_date' => 'required|date|date_format:d/m/Y',
            'start_time' => 'required|date_format:H:i',
            'finish_time' => 'required|date_format:H:i'
        ]);
        $scheduleCode = Str::random(6);
        if (!$val->fails()) {
            Schedule::create([
                "schedule_id"=>$scheduleCode,
                "mentor_id"=>$r->mentor_id,
                "course_code"=>$r->course_code,
                "schedule_date"=>date('Y-m-d',strtotime($r->schedule_date)),
                "start_time"=>$r->start_time,
                "finish_time"=>$r->finish_time
            ]);
            return response()->json([
                "msg" => "success",
                "schedule_id" => $scheduleCode
            ],200);
        }else{
            return response()->json($val->errors(),400);
        }
    }

    public function showSchedule(){
        $x = Schedule::all();
        return response()->json($x,200);
    }

    public function deleteSchedule($schedule_id){
        $x = Schedule::where('schedule_id',$schedule_id);
        if ($x->exists()) {
            $x->delete();
            return response()->json([
                "msg" => "success",
            ],200);
        }else{
            return response()->json([
                "msg" => "fail",
            ],400);
        }
    }

    public function updateSchedule(Request $r,$schedule_id){
        $x = Schedule::where('schedule_id',$schedule_id)->update([
            "mentor_id"=>$r->mentor_id,
            "course_code"=>$r->course_code,
            "schedule_date"=>date('Y-m-d',strtotime($r->schedule_date)),
            "start_time"=>$r->start_time,
            "finish_time"=>$r->finish_time
        ]);
        if ($x) {
            return response()->json([
                "msg" => "success"
            ],200);
        }else{
            return response()->json([
                "msg" => "err"
            ],500);
        }
    }
}