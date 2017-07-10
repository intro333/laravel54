<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Models\UserDetail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use App\Models\Confidential;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $validator =  Validator::make($data, [
            'name' => 'required|string|max:30',
            'sname' => 'required|string|max:30',
            'email' => 'required|string|email|max:40|unique:users',
            'password'   => 'required|string|min:6|max:50|confirmed',
            'phone'      => 'max:20',
        ]);

        if ($validator->fails())
        {
            flash($validator->messages()->first())->error();
        }

        return $validator;
    }

    public function register(Request $request)
    {
//        dd($request->all());
        $confidential = Confidential::first();

        if ($request['electronic_key'] == $confidential->electronic_key) {

            $this->validator($request->all())->validate();

            event(new Registered($user = $this->create($request->all())));
            event(new Registered($userDetails = $this->userDetails($request->all(), $user->id)));

            $this->guard()->login($user);

            return $this->registered($request, $user)
                ?: redirect($this->redirectPath());
        } else {
            flash("Не верный электронный ключ")->error();
            return redirect('register');
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'email'     => $data['email'],
            'password'  => bcrypt($data['password']),
            'role'      => 'person',
            'is_active' => 1,
        ]);
    }

    protected function userDetails(array $data,$userDetailsKey)
    {
        return UserDetail::create([
            'user_details_user_id' => $userDetailsKey,
            'name'      => $data['name'],
            'sname'     => $data['sname'],
            'phone'     => $data['phone'],
            'mname'     => null,
            'address'   => null,
            'birthdate' => null,
            'gender'    => 0,
        ]);
    }
}
