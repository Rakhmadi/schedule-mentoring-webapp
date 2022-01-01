<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AppController;
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//auth handel
Route::post('/register',[AuthController::class ,'registerUser']);
Route::post('/login',[AuthController::class, 'login']);
Route::get('/logout',[AuthController::class, 'logout']);

Route::group(['middleware'=>['verifyToken']],function(){
    //course handle
    Route::post('/create_course',[AppController::class, 'createCourse']);
    Route::delete('/delete_course/{course_code}',[AppController::class, 'deleteCourse']);
    Route::get('/show_course',[AppController::class, 'showCourse']);
    Route::put('/update_course/{course_code}',[AppController::class, 'updateCourse']);
    Route::get('/single_course/{course_code}',[AppController::class,'singleCourse']);
    //mentor handle
    Route::get('/show_mentor',[Appcontroller::class, 'showMentor']);
    Route::delete('/delete_mentor/{mentor_id}',[AppController::class, 'deleteMentor']);
    Route::post('/create_mentor',[AppController::class, 'createMentor']);
    Route::put('/update_mentor/{mentor_id}',[AppController::class, 'updateMentor']);
    //schedule transaction handle
    Route::post('/create_schedule', [AppController::class, 'createSchedule']);
    Route::get('/show_schedule', [AppController::class, 'showSchedule']);
    Route::delete('/delete_schedule/{schedule_id}', [AppController::class, 'deleteSchedule']);
    Route::put('/update_schedule/{schedule_id}',[AppController::class, 'updateSchedule']);
});