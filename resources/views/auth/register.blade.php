@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="register-container-main">
            <div class="register-container">
                <div class="register-header">
                    <div>
                        <p class="main-text">Регистрация</p>
                        <p class="explain-text">Если Вы впервые на нашем сайте, вам необходимо зарегистрироваться</p>
                    </div>
                    <div id="go-to-login" class="middle-button"><p>Вход</p></div>
                </div>
                <div class="register-filds">
                    {{--<form action="{{ route('register') }}" method="POST" id="register-form" autocomplete="off">--}}
                    <form action="{{ route('register') }}" method="POST" id="register-form">
                        {{ csrf_field() }}
                        <div class="register-filds-label-input register-flex-direction-column">
                            <label class="register-filds-label" for="name">Имя*</label>
                            <input id="fname" name="name" type="text" placeholder="Введите имя">
                        </div>
                        <div class="register-filds-label-input register-flex-direction-column">
                            <label class="register-filds-label" for="sname">Фамилия*</label>
                            <input id="sname" name="sname" type="text" placeholder="Введите фамилию">
                        </div>
                        <div class="register-filds-label-input register-flex-direction-column">
                            <label class="register-filds-label" for="email">Email*</label>
                            <input id="email" name="email" type="email" placeholder="Введите электронную почту">
                        </div>
                        <div class="register-filds-label-input register-flex-direction-column">
                            <label class="register-filds-label" for="password">Пароль*</label>
                            <input id="password" name="password" type="password" placeholder="Введите пароль">
                        </div>
                        <div class="register-filds-label-input register-flex-direction-column">
                            <label class="register-filds-label" for="password-confirm">Повтор*</label>
                            <input id="password-confirm" name="password_confirmation" type="password" placeholder="Повторите пароль">
                        </div>
                        <div class="register-filds-label-input register-flex-direction-column">
                            <label class="register-filds-label" for="password-confirm">Ключ*</label>
                            <input id="electronic_key" name="electronic_key" type="password" placeholder="Введите электронный ключ">
                        </div>
                        <div class="register-filds-label-input register-flex-direction-column">
                            <label class="register-filds-label" for="phone">Телефон</label>
                            <input id="phone" name="phone" type="text" placeholder="+7(___) ___ __ __">
                        </div>
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <input type="submit" id="register-submit" class="register-button" value="Зарегистрироваться">
                        </div>
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <div style="color: red; display: none;" class="error_message">Заполните все поля помеченные звёздочкой.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
