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
        if (!Schema::hasTable('deliveries')) {
            Schema::create('deliveries', function (Blueprint $table) {
                $table->id('DeliveryID');
                $table->date('DeliveryDate');
                $table->enum('DeliveryStatus', ['Pending', 'Completed', 'Cancelled']);

                // Define MemberID and VolunteerID only once
                $table->unsignedBigInteger('MemberID');
                $table->unsignedBigInteger('VolunteerID');

                // Foreign key constraints
                $table->foreign('MemberID')->references('MemberID')->on('members')->onDelete('cascade');
                $table->foreign('VolunteerID')->references('VolunteerID')->on('volunteers')->onDelete('cascade');

                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deliveries');
    }
};
