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

    //Обновить количество квот
    public function scopeUpdateCountsQuota($query, $id)
    {
        $ordersQuota = OrdersQuota::where('orders_quota_id', $id)->get()->first();

        return $query->where('orders_quota_id', $id)
            ->update(['counts_quota' => ($ordersQuota->counts_quota - 1)]);
    }
}
