<?php

namespace App\Http\Controllers;

use App\Models\Citymodele;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class City extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Citymodele::all();
    }
    function filter_data(Request $request)
    {
      $data = DB::table('cities')
                    ->where('city', 'like', '%'.$request->filtercity.'%')
                    ->get();
      return $data;
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
        $edit=Citymodele::findOrFail($id);
        return $edit;
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
