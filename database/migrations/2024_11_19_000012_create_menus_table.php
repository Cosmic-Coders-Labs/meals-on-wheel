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
        if (!Schema::hasTable('menus')) {
            Schema::create('menus', function (Blueprint $table) {
                $table->id('MenuID');
                $table->date('WeekStartDate');
                $table->date('WeekEndDate');
                $table->string('NewAttribute', 255)->nullable();
                $table->unsignedBigInteger('MealID');
                $table->foreign('MealID')->references('MealID')->on('meals')->onDelete('cascade');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
