<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    /*Статусы заказа*/
    const IN_PROGRESS = 1;//Обрабатывается
    const DONE = 2;//Выполнен
    const CANCELLED = 3;//Удалён/Отменён
    const CHANGE = 4;//Изменить
    const EXECUTION = 5;//Передан на исполнение

    //Трейт для мягкого удаления
    use SoftDeletes;

    protected $table = 'orders';

    protected $primaryKey = 'order_id';

    protected $fillable = [
        'user_order_id', 'comment', 'status', 'features', 'delivery_date', 'time_quota_id'
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
        return $this->belongsTo('App\Models\User', 'user_order_id', 'id');
    }

    /*
     * Связь с квотами
     */
    public function timeQuota()
    {
        return $this->belongsTo('App\Models\OrdersQuota', 'time_quota_id', 'orders_quota_id');
    }

    /**
     * Выборка по статусу заказа.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeStatus($query, $status)
    {
        if ($status === 1) {
            return $query->where('status', 1)->orWhere('status', 5);
        } else {
            return $query->where('status', $status);
        }

    }

    /**
     * Выборка по году заказа.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeYear($query, $year)
    {
//        return $query->where(\DB::raw('YEAR(created_at)', '=',  $year ));
        return $query->whereYear('created_at', '=', $year);
    }

    /**
     * Выборка по месяцу заказа.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeMonth($query, $month)
    {
        return $query->whereMonth('created_at', '=', $month );
//        return $query->where(created_at', 'like', '%' . $month . '%');
    }
}
