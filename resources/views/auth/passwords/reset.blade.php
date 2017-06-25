@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="register-container-main">
            <div class="register-container">
                <div class="register-header">
                    <div>
                        <p class="main-text">Смена пароля</p>
                        <p class="explain-text">Введите свой email, новый пароль и его подтверждение.</p>
                    </div>
                    <div id="go-to-login" class="middle-button"><p>Войти</p></div>
                </div>
                <div class="register-filds">
                    <form action="{{ route('password.request') }}" method="POST" id="reset-password-form" autocomplete="on">
                        {{ csrf_field() }}
                        <input type="hidden" name="token" value="{{ $token }}">
                        <div class="register-filds-label-input">
                            <label class="register-filds-label" for="email">Email</label>
                            <input {{ $errors->has('email') && $errors->first('email') !== 'Ссылка на изменения пароля устарела, отправьте запрос ещё раз.' ? 'class=has-error' : '' }} id="email" name="email" type="email" placeholder="Введите электронную почту">
                        </div>

                        @if ($errors->has('email'))
                            <div class="register-filds-label-input show-help-block">
                                <label class="register-filds-label" for="email"></label>
                                <div class="help-block">
                                    <span>{{ $errors->first('email') }}</span>
                                    @if($errors->first('email') === 'Ссылка на изменения пароля устарела, отправьте запрос ещё раз.')
                                        <a href="/password/reset">Перейти</a>
                                    @endif
                                </div>
                            </div>
                        @endif
                        <div class="register-filds-label-input">
                            <label class="register-filds-label" for="password">Пароль</label>
                            <input {{ $errors->has('password') ? 'class=has-error' : '' }} id="password" name="password" type="password" placeholder="Введите пароль">
                        </div>
                        @if ($errors->has('password'))
                            <div class="register-filds-label-input show-help-block">
                                <label class="register-filds-label" for="password"></label>
                                <div class="help-block">
                                    <span>{{ $errors->first('password') }}</span>
                                </div>
                            </div>
                        @endif
                        <div class="register-filds-label-input">
                            <label class="register-filds-label" for="password-confirm">Повтор</label>
                            <input {{ $errors->has('password_confirmation') ? 'class=has-error' : '' }} id="password-confirm" name="password_confirmation" type="password" placeholder="Повторите пароль">
                        </div>
                        @if ($errors->has('password_confirmation'))
                        <div class="register-filds-label-input show-help-block">
                            <label class="register-filds-label" for="password_confirmation"></label>
                            <div class="help-block">
                                <span>{{ $errors->first('password_confirmation') }}</span>
                            </div>
                        </div>
                        @endif
                        <div class="register-filds-label-input">
                            <label class="register-filds-label" for="password-confirm">Ключ</label>
                            <input id="electronic_key" name="electronic_key" type="password" placeholder="Введите электронный ключ">
                        </div>
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <input type="submit" id="reset-password-submit" class="register-button" value="Сменить пароль">
                        </div>
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <div style="color: red; display: none;" class="error_message">Заполните все поля.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).on('click', '#email', function () {
            if ($(this).hasClass('has-error')) {
                $(this).removeClass('has-error');
                $('.show-help-block').remove();
            }
        });
        $(document).on('click', '#password', function () {
            if ($(this).hasClass('has-error')) {
                $(this).removeClass('has-error');
                $('.show-help-block').remove();
            }
        });
        $(document).on('click', '#password-confirm', function () {
            if ($(this).hasClass('has-error')) {
                $(this).removeClass('has-error');
                $('.show-help-block').remove();
            }
        });
    </script>
@endsection
