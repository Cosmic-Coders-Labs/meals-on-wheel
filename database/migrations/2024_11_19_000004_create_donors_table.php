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
        if (!Schema::hasTable('donors')) {
            Schema::create('donors', function (Blueprint $table) {
                $table->id('DonorID');
                $table->string('Name', 100);
                $table->string('Email', 100)->unique();
                $table->decimal('DonationAmount', 10, 2);
                $table->date('DonationDate');
                $table->timestamps();
            });
        }
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donors');
    }
};
