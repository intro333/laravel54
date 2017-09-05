@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="register-container-main">
            <div class="register-container">
                <div class="register-header">
                    <div>
                        <p class="main-text">Войти</p>
                        <p class="explain-text">Для входа укажите свои данные</p>
                    </div>
                    <div id="go-to-site" class="middle-button"><p>На сайт</p></div>
                </div>
                <div class="register-filds">
                    <form action="{{ route('adminLogin') }}" method="POST" id="login-form" autocomplete="on">
                        {{ csrf_field() }}
                        <div class="register-filds-label-input">
                            <label class="register-filds-label" for="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="Введите электронную почту">
                        </div>
                        <div class="register-filds-label-input">
                            <label class="register-filds-label" for="password">Пароль</label>
                            <input id="password" name="password" type="password" placeholder="Введите пароль">
                        </div>
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <div>
                                <input type="checkbox" id="remember" name="remember" {{ old('remember') ? 'checked' : '' }} />
                                <label for="remember"><span></span>Запомнить меня</label>
                            </div>
                        </div>
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <div>
                                <input type="submit" id="login-submit" class="login-button" value="Войти">
                            </div>
                        </div>
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <div style="color: red; display: none;" class="error_message">Введите Ваш email и пароль.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
