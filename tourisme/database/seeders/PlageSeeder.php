<?php
namespace Database\Seeders;
use App\Models\City;
use App\Models\Citymodele;
use App\Models\Plage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class PlageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json=Storage::disk('local')->get('/json/plage.json');
        $movies=json_decode($json,true);
        foreach($movies as $movie){
            Plage::query()->updateOrCreate([
                "image"=>$movie["image"],
                "nom"=>$movie["nom"],
                "description"=>$movie["description"],
                "googlemaps"=>$movie["googlemaps"],
                "like"=>$movie["aime"]
            ]);
        }
    }
}
