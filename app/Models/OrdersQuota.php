<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrdersQuota extends Model
{
    protected $table = 'orders_quota';

    protected $primaryKey = 'orders_quota_id';

    protected $fillable = [
        'time_quota',
    ];

    protected $dates = [
        'delivery_date',
        'created_at',
        'updated_at'
    ];
}
