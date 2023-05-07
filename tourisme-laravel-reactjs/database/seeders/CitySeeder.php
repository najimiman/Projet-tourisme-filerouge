<?php
namespace Database\Seeders;
use App\Models\City;
use App\Models\Citymodele;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json=Storage::disk('local')->get('/json/city.json');
        $movies=json_decode($json,true);
        foreach($movies as $movie){
            Citymodele::query()->updateOrCreate([
                "city"=>$movie["city"],
                "placeincity"=>$movie["place in city"],
                "conseil"=>$movie["Le conseil"],
                "description"=>$movie["description"],
                "maps"=>$movie["maps"],
                "image"=>$movie["image"]
            ]);
        }
    }
}
