<?php

namespace App\Models;

use App\Notifications\MyOwnResetPassword;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $softDelete = true;// <-- Используем этот свойство для мягкого удаления.

    protected $fillable = [
        'email', 'password', 'is_active', 'role',
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

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MyOwnResetPassword($token));
    }

    /*
     * Связь с деталями пользователя
     */
    public function details()
    {
        return $this->hasMany('App\Models\UserDetail', 'user_details_user_id', 'id');
    }

    /*
     * Связь с заказом
     */
    public function orders()
    {
        return $this->hasMany('App\Models\Order', 'user_order_id', 'id');
    }

    //Role Manage
    public function hasRole($role)
    {
        if($this->role === $role) {
            return true;
        }
        return false;
    }
}
