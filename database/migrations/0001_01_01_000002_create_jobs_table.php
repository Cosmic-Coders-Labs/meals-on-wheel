<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Database\Helpers\SchemaDefinitions;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            SchemaDefinitions::createJobs($table);
        });

        Schema::create('job_batches', function (Blueprint $table) {
            SchemaDefinitions::createJobBatches($table);
        });

        Schema::create('failed_jobs', function (Blueprint $table) {
            SchemaDefinitions::createFailedJobs($table);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
        Schema::dropIfExists('job_batches');
        Schema::dropIfExists('failed_jobs');
    }
};
