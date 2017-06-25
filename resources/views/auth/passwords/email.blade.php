@extends('layouts.app')

@section('content')
    <div class="container">
        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @endif
        <div class="register-container-main">
            <div class="register-container">
                <div class="register-header">
                    <div>
                        <p class="main-text">Смена пароля</p>
                        <p class="explain-text">Отправьте ссылку для смены пароля на свой email.</p>
                    </div>
                    <div id="go-to-login" class="middle-button"><p>Назад</p></div>
                </div>
                <div class="register-filds">

                    <form action="{{ route('password.email') }}" method="POST" id="email-for-reset-password-form">
                        {{ csrf_field() }}
                        <div class="register-filds-label-input">
                            <label class="register-filds-label" for="email">Email</label>
                            <input {{ $errors->has('email') ? 'class=has-error' : '' }} id="email" name="email" type="email" placeholder="Введите электронную почту">
                        </div>
                        @if ($errors->has('email'))
                            <div class="register-filds-label-input show-help-block">
                                <label class="register-filds-label" for="email"></label>
                                <div class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </div>
                            </div>
                        @endif
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <input type="submit" id="email-for-reset-password-submit" class="register-button" value="Отправить">
                        </div>
                        <div class="register-filds-elements">
                            <label class="register-filds-label"></label>
                            <div style="color: red; display: none;" class="error_message">Введите Ваш email.</div>
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
    </script>
@endsection
