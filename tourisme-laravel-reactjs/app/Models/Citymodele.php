<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Citymodele extends Model
{
    use HasFactory;
    protected $table="cities";
    protected $fillable=["city","placeincity","conseil","description","maps","image"];
}
