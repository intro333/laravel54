<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table = 'products';

    protected $fillable = [
        "product_category_id",
        "bar_code",
        "name",
        "description",
        "image_path",
        "price",
        "unit",
        "features",
        "is_active",
        "deleted_at",
        "created_at",
        "updated_at",
    ];

    protected $primaryKey = 'product_id';

    protected $softDelete = true;// <-- Используем этот свойство для мягкого удаления.

    /**
     * Атрибуты, которые должны быть преобразованы в даты.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

//    protected $guarded = ['product_id'];

    /**
     * Атрибуты, которые должны быть преобразованы к базовым типам.
     *
     * @var array
     */
    protected $casts = [
        'features' => 'array',
        'price'    => 'integer'//Todo Для группирования это поле должно быть integer, а в базе оно double.
    ];

    /*
     * Связь с категориями
     */
    public function category()
    {
        return $this->belongsTo('App\Models\Categories', 'product_category_id', 'category_id');
    }

    /**
     * Заготовка запроса активных продуктов.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', 1);
//            ->orderBy('product_categories_id', 'desc');
    }
}
