<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Confidential extends Eloquent
{
    protected $fillable = [
        'electronic_key',
    ];

    protected $hidden = [
        'electronic_key'
    ];
}
