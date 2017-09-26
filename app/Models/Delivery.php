<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    protected $table = 'delivery';

    protected $primaryKey = 'delivery_date_id';

    protected $fillable = [
        'delivery_date',
        'status',
        'delivery_message',
        'order_control_status',
    ];

    protected $dates = [
        'delivery_date',
        'created_at',
        'updated_at'
    ];
}
