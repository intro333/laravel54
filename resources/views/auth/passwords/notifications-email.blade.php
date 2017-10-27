@component('vendor.mail.markdown.message')
{{-- Greeting --}}
@if (! empty($greeting))
    # {{ $greeting }}
@else
    @if ($level == 'error')
        # Ошибка!
    @else
        # Привет!
    @endif
@endif

{{-- Intro Lines --}}
@foreach ($introLines as $line)
    {{ $line }}

@endforeach

{{-- Action Button --}}
@isset($actionText)
<?php
switch ($level) {
    case 'success':
        $color = 'green';
        break;
    case 'error':
        $color = 'red';
        break;
    default:
        $color = 'blue';
}
?>
@component('mail::button', ['url' => $actionUrl, 'color' => $color])
{{ $actionText }}
@endcomponent
@endisset

{{-- Outro Lines --}}
@foreach ($outroLines as $line)
    {{ $line }}

@endforeach

{{-- Salutation --}}
@if (! empty($salutation))
    {{ $salutation }}
@else
    С уважением, Сергей и Лена.
@endif

{{-- Subcopy --}}
@isset($actionText)
@component('mail::subcopy')
Так же вы можете перейти по этой ссылке, либо скопировать её и вставить в свой браузер : [{{ $actionUrl }}]({{ $actionUrl }})
@endcomponent
@endisset
@endcomponent
