<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function registerUser(Request $r){
        $val = Validator::make($r->all(),[
            "name" => "required|max:100",
            "email" => "required|email|unique:users",
            "password" => "required"
        ]);

        $token =  bcrypt(Str::random(10));

        $hash = Hash::make($r->password,[
            'rounds' => 7
        ]);

        if (!$val->fails()) {
            User::create([
                "name" => $r->name,
                "email" => $r->email,
                "token" => $token,
                "password" => $hash
            ]);
            return response()->json([
                'msg' => 'Success',
                'token' => $token
            ]);
        }else{
            return response()->json($val->errors());
        }
    }

    private function revokeToken($email){
        $token =  bcrypt(Str::random(10));
        return User::where('email',$email)->update([
            "token" => $token,
        ]);
    }

    public function login(Request $r){
        $val = Validator::make($r->all(),[
            'email'=>'required|email',
            'password'=>'required'
        ]);

        if (!$val->fails()) {
            if ($this->revokeToken($r->email)) {
                $user = User::where('email',$r->email);
    
                if ($user->exists() && Hash::check($r->password,$user->first()->password)) {
                    return response()->json([
                        'msg' => 'login success',
                        'token' => $user->first()->token
                    ],200);
                }else{
                    return response()->json([
                        'msg' => 'pass atau email salah'
                    ],400);
                }
            }
        }else{
            return response()->json($val->errors());
        }
    }

    public function logout(Request $r){
        $x = User::where('token',$r->bearerToken());
        if ($x->exists()) {
            if($this->revokeToken($x->first()->email)){
                return response()->json([
                    'msg' => 'Logout success'
                ],200);
            }
        }else{
            return response()->json([
                'msg' => 'logout failed'
            ],401);
        }
    }
}
