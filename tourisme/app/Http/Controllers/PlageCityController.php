<?php

namespace App\Http\Controllers;

use App\Models\Cityplage;
use App\Models\Fovorite;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
    function filter_datacity(Request $request)
    {
            $data = DB::table('cityplages')
                    ->where('category', 'like', '%cityplace%')
                    ->where('city', 'like', '%'.$request->filtercity.'%')
                    ->get()->toArray();
            return $data;
    }
    function filter_dataplages(Request $request)
    {
        $data = DB::table('cityplages')
        ->where('category', 'like', '%plages%')
        ->where('city', 'like', '%'.$request->filtercity.'%')
        ->get();
        return $data;
      
    }
    function addfavorite(Request $request){
        $input = $request->all();
        $favorite = Fovorite::create($input);
        return $favorite;
    }
    function getFavorite(){
        return Fovorite::all();
    }
    function getmyfavorite(Request $request){
        $listfavorite=User::join('fovorites', 'users.id', '=', 'fovorites.User_id')
        ->join('cityplages','cityplages.id','=','fovorites.cityplages_id')
        ->where('fovorites.User_id',$request->iduser)
        ->get();
        return $listfavorite;
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
