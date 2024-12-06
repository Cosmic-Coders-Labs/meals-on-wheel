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
        Schema::create('users', function (Blueprint $table) {
            SchemaDefinitions::createUsersTable($table);
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            SchemaDefinitions::createPasswordResetTokens($table);
        });

        Schema::create('sessions', function (Blueprint $table) {
            SchemaDefinitions::createSessions($table);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
