<?php

namespace App\Models;

//use Illuminate\Notifications\Notifiable;
//use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
//use Illuminate\Auth\Authenticatable;
//use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContracts;
//use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContracts;
//use Jenssegers\Mongodb\Eloquent\HybridRelations;
//
//class User extends Eloquent implements AuthenticatableContracts, CanResetPasswordContracts
//{
use App\Notifications\MyOwnResetPassword;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;

class User extends Authenticatable
{
    use Notifiable;
//    use Authenticatable;
//    use Notifiable;
//    use HybridRelations;

    protected $connection = 'mysql';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     * @return string|void
     */
//    public function getEmailForPasswordReset() {
//
//    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
//    public function sendPasswordResetNotification($token) {
//
//    }

    protected $fillable = [
        'name', 'sname', 'email', 'password', 'phone', 'electronic_key',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'electronic_key'
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
}
