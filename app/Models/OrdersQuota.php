<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrdersQuota extends Model
{
    protected $table = 'orders_quota';

    protected $primaryKey = 'orders_quota_id';

    protected $fillable = [
        'time_quota',
        'counts_quota',
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    /**
     * Выбрать квоты, где их количество больше 0.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeQuotaCounts($query)
    {
        return $query->where('counts_quota', '>', '0');
    }

    /*
     * Связь с заказом
     */
    public function order()
    {
        return $this->hasMany('App\Models\Order', 'time_quota_id', 'orders_quota_id');
    }

    //Обновить количество квот
    public function scopeUpdateCountsQuota($query, $id)
    {
        if ($id) {
            $countsAllQuota = OrdersQuota::where('counts_quota', '<>', 0)->get();
            $ordersQuota = OrdersQuota::where('orders_quota_id', $id)->get()->first();
//            dd($countsAllQuota->isEmpty());
            if ($countsAllQuota->isEmpty()) {
                return 2;
            } elseif ($ordersQuota->counts_quota === 0) {
                return 'no free quota';
            } else {
                return $query->where('orders_quota_id', $id)
                    ->update(['counts_quota' => ($ordersQuota->counts_quota - 1)]);
            }
        } else return 1;

    }

    //Выбрать квоту по id
    public function scopeQuotaOnId($query, $id)
    {
        return $query->where('orders_quota_id', $id);
    }
}
