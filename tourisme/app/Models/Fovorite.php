<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fovorite extends Model
{
    use HasFactory;
    protected $table="fovorites";
    protected $fillable=["cityplages_id","User_id"];
}
