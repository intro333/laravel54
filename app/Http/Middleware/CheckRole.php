<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class CheckRole
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
        $roles = $this->getRequiredRoleForRoute($request->route());
//        dd(Auth::check());
//        dd(\Auth::check());

        if (Auth::check() && Auth::user()->hasRole()) {
            return $next($request);
        }
//        dd(Auth::check());
        return redirect(route('viewAdminLogin'));
    }

    /**
     * Obtiene los roles requeridos por la ruta.
     *
     * @param string/array $route arreglo de cadenas o cadena con el nombre del rol necesario
     *
     * @return bool
     */
    private function getRequiredRoleForRoute($route)
    {
        $actions = $route->getAction();

        return isset($actions['roles']) ? $actions['roles'] : null;
    }
}
