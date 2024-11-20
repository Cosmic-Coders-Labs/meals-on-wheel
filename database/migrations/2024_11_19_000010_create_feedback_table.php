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
        if (!Schema::hasTable('feedbacks')) {
            Schema::create('feedbacks', function (Blueprint $table) {
                $table->id('FeedbackID');
                $table->text('FeedbackText');
                $table->integer('Rating')->check('Rating >= 1 AND Rating <= 5');
                $table->date('FeedbackDate');
                $table->unsignedBigInteger('MemberID');
                $table->foreign('MemberID')->references('MemberID')->on('members')->onDelete('cascade');
                $table->timestamps();
            });
        }
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedback');
    }
};
