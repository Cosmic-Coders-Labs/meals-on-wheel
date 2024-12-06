<?php

// app/Http/Requests/RegisterRequest.php
namespace App\Http\Requests;

use App\Helpers\ValidationHelper;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $role = $this->input('role', 'member');
        return ValidationHelper::getRoleValidationRules($role);
    }
}
