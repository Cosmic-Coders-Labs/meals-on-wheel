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
        if (!Schema::hasTable('caregivers')) {
            Schema::create('caregivers', function (Blueprint $table) {
                $table->id('CaregiverID');
                $table->string('Name', 100);
                $table->string('Phone', 15);
                $table->string('Address', 255);
                $table->string('RelationshipToMember', 50);
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('caregivers');
    }
};
