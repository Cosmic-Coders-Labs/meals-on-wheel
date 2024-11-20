<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * I have created the Members schema as per the ERD design.
     */
    public function up(): void
    {
        if (!Schema::hasTable('members')) {
            Schema::create('members', function (Blueprint $table) {
                $table->id('MemberID');  // Primary key for members table
                $table->string('Name', 100);
                $table->integer('Age');
                $table->string('Address', 255);
                $table->string('Phone', 15);
                $table->text('DietaryRequirements')->nullable();
                $table->date('RegistrationDate');

                // Define the CaregiverID column as a foreign key with the correct references
                $table->unsignedBigInteger('CaregiverID');  // Ensure this is the same type as the caregiver's id
                $table->foreign('CaregiverID')->references('CaregiverID')->on('caregivers')->onDelete('cascade');

                $table->timestamps();  // Timestamps for created_at and updated_at
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
