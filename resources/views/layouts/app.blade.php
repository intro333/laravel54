<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="/css/libs/bootstrap/3.3.7/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    {{--<link rel="stylesheet" href="/css/libs/bootstrap/3.3.7/bootstrap.min.css.map" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">--}}
    <!-- Optional theme -->
    {{--<link rel="stylesheet" href="/css/libs/bootstrap/3.3.7/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">--}}
    <!-- Latest compiled and minified JavaScript -->
    {{--<script src="/js/libs/bootstrap/3.3.7/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>--}}
    <!-- Jquery -->
    <script src="/js/libs/jquery/3.2.0/jquery.min.js"></script>

    <link media="all" type="text/css" rel="stylesheet" href="/css/libs/bootstrap/bootstrap-datepicker3.min.css">
    <meta charset="UTF-8">
    <title>Food4People</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="/css/main.css">
</head>
<body>
    <div id="app">
        @include('flash::message')
        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="/js/libs/bootstrap-datepicker.min.js"></script>
    <script src="/js/libs/jquery.maskedinput.min.js"></script>
    <script src="/js/libs/bootstrap-datepicker.ru.min.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/function.js"></script>
    <script>
        $('div.alert').not('.alert-important').delay(4000).slideUp(350);
    </script>

</body>
</html>
