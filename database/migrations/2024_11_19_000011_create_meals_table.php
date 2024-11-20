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
        if (!Schema::hasTable('meals')) {
            Schema::create('meals', function (Blueprint $table) {
                $table->id('MealID');
                $table->string('MealName', 100);
                $table->text('Ingredients');
                $table->integer('Calories');
                $table->integer('PreparationTime');
                $table->unsignedBigInteger('PartnerID');
                $table->foreign('PartnerID')->references('PartnerID')->on('partners')->onDelete('cascade');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meals');
    }
};
