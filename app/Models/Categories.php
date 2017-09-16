<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';

    protected $fillable = [
        "name",
        "description",
        "image_path",
        "is_active",
        "deleted_at",
        "created_at",
        "updated_at",
    ];

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

    protected $primaryKey = 'category_id';

    protected $softDelete = true;// <-- Используем этот свойство для мягкого удаления.

//    protected $guarded = ['category_id']; // Нельзя изменять category_id, а остальные можно.

    /*
     * Связь с продуктами
     */
    public function products()
    {
        return $this->hasMany('App\Models\Products', 'product_category_id', 'category_id');
    }

    /**
     * Заготовка запроса активных категорий.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', 1);
    }
}
