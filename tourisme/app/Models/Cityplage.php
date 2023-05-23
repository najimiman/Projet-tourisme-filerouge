<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cityplage extends Model
{
    use HasFactory;
    protected $table="cityplages";
    protected $fillable=["image","city","nom","conseil","description","googlemaps","like","category"];
}
