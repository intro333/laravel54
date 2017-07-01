<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $collection = 'categories';

    protected $fillable = [
        "category_id",
        "name",
        "description",
        "image_path",
        "is_active",
        "deleted_at",
        "created_at",
        "updated_at",
    ];
}
