<?php

namespace Database\Helpers;

use Illuminate\Database\Schema\Blueprint;

class SchemaDefinitions
{
    public static function createUsersTable(Blueprint $table)
    {
        $table->id();
        $table->string('email')->unique();
        $table->string('password');
        $table->string('status')->default('pending');
        $table->decimal('latitude', 10, 7)->default(0);
        $table->decimal('longitude', 10, 7)->default(0);
        $table->string('reason_of_rejection')->nullable();
        $table->timestamp('email_verified_at')->nullable();
        $table->rememberToken();
        $table->timestamps();
    }


    public static function createPasswordResetTokens(Blueprint $table)
    {
        $table->string('email')->primary();
        $table->string('token');
        $table->timestamp('created_at')->nullable();
    }

    public static function createSessions(Blueprint $table)
    {
        $table->string('id')->primary();
        $table->foreignId('user_id')->nullable()->index();
        $table->string('ip_address', 45)->nullable();
        $table->text('user_agent')->nullable();
        $table->longText('payload');
        $table->integer('last_activity')->index();
    }

    public static function createCache(Blueprint $table)
    {
        $table->string('key')->primary();
        $table->mediumText('value');
        $table->integer('expiration');
    }

    public static function createCacheLocks(Blueprint $table)
    {
        $table->string('key')->primary();
        $table->string('owner');
        $table->integer('expiration');
    }

    public static function createJobs(Blueprint $table)
    {
        $table->id();
        $table->string('queue')->index();
        $table->longText('payload');
        $table->unsignedTinyInteger('attempts');
        $table->unsignedInteger('reserved_at')->nullable();
        $table->unsignedInteger('available_at');
        $table->unsignedInteger('created_at');
    }

    public static function createJobBatches(Blueprint $table)
    {
        $table->string('id')->primary();
        $table->string('name');
        $table->integer('total_jobs');
        $table->integer('pending_jobs');
        $table->integer('failed_jobs');
        $table->longText('failed_job_ids');
        $table->mediumText('options')->nullable();
        $table->integer('cancelled_at')->nullable();
        $table->integer('created_at');
        $table->integer('finished_at')->nullable();
    }

    public static function createFailedJobs(Blueprint $table)
    {
        $table->id();
        $table->string('uuid')->unique();
        $table->text('connection');
        $table->text('queue');
        $table->longText('payload');
        $table->longText('exception');
        $table->timestamp('failed_at')->useCurrent();
    }

    public static function createRoles(Blueprint $table)
    {
        $table->id();
        $table->string('name')->unique();
        $table->longText('description');
        $table->timestamps();
    }
    public static function createUserWithRoles(Blueprint $table)
    {
        $table->unsignedBigInteger('user_id');
        $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        $table->unsignedBigInteger('role_id');
        $table->foreign('role_id')->references('id')->on('roles')->cascadeOnDelete();
        $table->primary(['user_id', 'role_id']);
        $table->timestamps();
    }

    public static function createCaregivers(Blueprint $table)
    {
        $table->id('caregiver_id');
        $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
        $table->timestamps();
    }

    public static function createMember(Blueprint $table)
    {
        $table->id('member_id');
        $table->string('eligebility')->default('Not Specified');
        $table->string('needs');
        $table->string('allergies')->nullable();
        $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
        $table->timestamps();
    }


    public static function createCaregiversToMembers(Blueprint $table)
    {
        $table->unsignedBigInteger('caregiver_id');
        $table->foreign('caregiver_id')->references('caregiver_id')->on('caregivers')->cascadeOnDelete();
        $table->unsignedBigInteger('member_id');
        $table->foreign('member_id')->references('member_id')->on('members')->cascadeOnDelete();
        $table->primary(['caregiver_id', 'member_id']);
        $table->timestamps();
    }

    public static function createPartners(Blueprint $table)
    {
        $table->id('partner_id');
        $table->string('partner_name');
        $table->string('partner_registered_by');
        $table->string('address');
        $table->string('business_license');
        $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
        $table->timestamps();
    }

    public static function createVolunteers(Blueprint $table)
    {
        $table->id('volunteer_id');
        $table->string('volunteer_name');
        $table->string('volunteer_role');
        $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
        $table->timestamps();
    }
    public static function createProfile(Blueprint $table)
    {
        $table->id('profile_id');
        $table->string('first_name')->nullable();
        $table->string('last_name')->nullable();
        $table->integer('age')->nullable();
        $table->string('gender')->nullable();
        $table->date('birthday')->nullable();
        $table->string('contact_number')->nullable();
        $table->string('address')->nullable();
        $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
        $table->timestamps();
    }

    public static function createMeals(Blueprint $table)
    {
        $table->id('meal_id');
        //details
        $table->string('name');
        $table->longText('ingredients');
        $table->longText('image');
        $table->longText('reason_for_rejection')->nullable();
        $table->string('status');
        $table->enum('dietary_type', ['vegetarian', 'vegan', 'gluten-free', 'none']);
        $table->decimal('calories');
        // userId is not a foreign key to avoid removing records created here if the user is deleted.
        $table->unsignedBigInteger('user_id');
        $table->timestamps();
    }

    public static function createMenu(Blueprint $table)
    {
        $table->id('menu_id');
        $table->bigInteger('week_start_date')->nullable();
        $table->bigInteger('week_end_date')->nullable();

        // Foreign key referencing 'id' column in 'meals' table
        $table->unsignedBigInteger('meal_id')->nullable();
        $table->foreign('meal_id')->references('meal_id')->on('meals')->cascadeOnDelete();
        // Foreign key referencing 'id' column in 'users' table with column name 'purposed_by'
        $table->unsignedBigInteger('purposed_by')->nullable();
        $table->foreign('purposed_by')->references('id')->on('users')->cascadeOnDelete();
        $table->timestamps();
    }

    public static function createDonor(Blueprint $table)
    {
        $table->id('donor_id');
        $table->string('donor_name')->nullable();
        $table->string('contact_number')->nullable();
        $table->string('email')->nullable();
        $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
        $table->timestamps();
    }

    public static function createDonations(Blueprint $table)
    {
        $table->id();
        $table->unsignedBigInteger('donor_id')->nullable();
        $table->foreign('donor_id')->references('donor_id')->on('donors')->cascadeOnDelete();
        $table->string('currency');  // Currency of the donation
        $table->decimal('amount', 8, 2);  // Amount of the donation
        $table->string('message')->nullable();  // Optional message with the donation
        $table->string('status');  // Status of the donation (e.g., 'completed', 'pending')
        $table->timestamps();
    }

}
