<?php

namespace App\Http\Controllers;

use App\Models\Cityplage;
use Illuminate\Http\Request;

class PlageCityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    public function getallcityplace()
    {
        // return Cityplage::all()->where('category','=','cityplace');
         return Cityplage::where('category','=','cityplace')->get()->toArray();
    }
    public function getallplages()
    {
        // return Cityplage::all()->where('category','=','plages');
        return Cityplage::where('category','=','plages')->get()->toArray();
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
        $edit=Cityplage::findOrFail($id);
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
