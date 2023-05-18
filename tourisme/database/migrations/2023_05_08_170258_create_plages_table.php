<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plages', function (Blueprint $table) {
            $table->id();
             $table->string("image");
            $table->text("nom");
            $table->text("description");
            $table->string("googlemaps");
            $table->integer("like");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plages');
    }
};
