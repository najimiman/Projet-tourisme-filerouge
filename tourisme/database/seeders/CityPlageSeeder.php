<?php
namespace Database\Seeders;
use App\Models\Cityplage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class CityPlageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json=Storage::disk('local')->get('/myfilejson/cityplage.json');
        $movies=json_decode($json,true);
        foreach($movies as $movie){
            Cityplage::query()->updateOrCreate([
                "image"=>$movie["image"],
                "city"=>$movie["city"],
                "nom"=>$movie["nom"],
                "conseil"=>$movie["conseil"],
                "description"=>$movie["description"],
                "googlemaps"=>$movie["googlemaps"],
                "like"=>$movie["aime"],
                "category"=>$movie["category"]
            ]);
        }
    }
}
