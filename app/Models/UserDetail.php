<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $table = 'user_details';

    protected $primaryKey = 'user_detail_id';

    protected $fillable = [
        'name', 'sname', 'mname', 'phone', 'address', 'user_details_user_id', 'gender', 'birthdate'
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

    /*
     * Связь с пользователем
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_details_user_id', 'id');
    }

    /**
     * Атрибуты, которые должны быть преобразованы к базовым типам.
     *
     * @var array
     */
    protected $casts = [
        'address' => 'array'
    ];
}
