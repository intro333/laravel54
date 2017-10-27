<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {

//        dd($guard);
//        dd(session()->get('sessionUserName'));
        if (Auth::check() && Auth::user()->hasRole($guard)) {
            return $next($request);
        } else if ($guard === 'admin' && !Auth::check()) {
            return redirect(route('viewAdminLogin'));
        } else if ($guard === 'person' && !Auth::check()) {
            return redirect(route('login'));
        } else if (Auth::check() && !Auth::user()->hasRole($guard) && $guard === 'admin') {
            return redirect(route('customer'));
        } else if (Auth::check() && !Auth::user()->hasRole($guard) && $guard === 'person') {
            return redirect(route('adminIndex'));
        }
//        else if ($guard === 'admin' && Auth::user()->role === 'person') {
//            return redirect(route('viewAdminLogin'));
//        }
        return response('Unauthorized.', 401);
    }
}
