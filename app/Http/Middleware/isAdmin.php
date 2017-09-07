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
    public function handle($request, Closure $next)
    {
//        dd(Auth::user());
//        if (Auth::check() && Auth::user()->hasRole()) {
        if (Auth::check() && Auth::user()->hasRole()) {
            return $next($request);
        }
        return redirect(route('viewAdminLogin'));
    }
}
