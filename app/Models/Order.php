<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    protected $primaryKey = 'order_id';

    protected $fillable = [
        'user_order_id', 'comment', 'status', 'features', 'delivery_date'
    ];

    protected $dates = [
        'delivery_date',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    /**
     * Атрибуты, которые должны быть преобразованы к базовым типам.
     *
     * @var array
     */
    protected $casts = [
        'features' => 'array'
    ];

    /*
     * Связь с пользователем
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'order_id', 'id');
    }

    /**
     * Выборка по статусу заказа.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    /**
     * Выборка по году заказа.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeYear($query, $year)
    {
        return $query->where('created_at', 'like', '%' . $year . '%');
    }
}
