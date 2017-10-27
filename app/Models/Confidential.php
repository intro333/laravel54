<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Confidential extends Model
{
    protected $fillable = [
        'electronic_key',
    ];

    protected $hidden = [
        'electronic_key'
    ];

    public $timestamps = false;
}
