<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            //$token = $user->createToken('MyToken')->accessToken;
            // return response()->json(['token' => $token], 200);
            return response()->json(['user' => $user], 200);
        } else {
            // return response()->json(['error' => 'Unauthorized'], 401);
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    public function register(Request $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required',
        //     'email' => 'required|email|unique:users',
        //     'password' => 'required|min:6',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json(['error' => $validator->errors()], 422);
        // }
        $user = User::where('email', $request->email)->first();
        if (!$user) {
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $token = $user->createToken('MyToken')->accessToken;
        return response()->json(['token' => $token], 200);
        }
        else {
            return response()->json(['error' => 'this email déja existe'], 401);
        }
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }
    public function users()
    {
        $usersList = User::all();
        return $usersList;
    }




    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
