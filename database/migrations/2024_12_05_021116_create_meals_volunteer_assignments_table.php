<?php

use Database\Helpers\SchemaDefinitions;
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
        if (!Schema::hasTable('volunteer_assignments')) {
            Schema::create('volunteer_assignments', function (Blueprint $table) {
                SchemaDefinitions::createVolunteerAssignments($table);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('volunteer_assignments');
    }
};
