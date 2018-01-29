@extends('admin.layouts.master')

@section('content')

    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h1>Глобальный статус всех заказов.</h1>

            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        {!! implode('', $errors->all('
                        <li class="error">:message</li>
                        ')) !!}
                    </ul>
                </div>
            @endif
        </div>
    </div>

    {!! Form::open(['route' => ['orders.control.status'], 'class' => 'form-horizontal', 'method' => 'POST', "autocomplete" => "off"]) !!}

    <div class="form-group">
        {!! Form::label('status', 'Статус', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::select('order_control_status', ['1' => 'Обрабатывается', '5' => 'Передан на исполнение', '2' => 'Выполнен'], $delivery->order_control_status, ['placeholder' => 'Выберите статус', 'class'=>'form-control', 'required' => 'required'])!!}
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            {!! Form::submit('Изменить статус', ['class' => 'btn btn-primary']) !!}
        </div>
    </div>
    {!! Form::close() !!}
    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h3>Как правильно изменять статусы.</h3>
            <ul style="font-size: 16px;">
                <li>После того, как вы выбрали дату доставки, здесь будет статус "Обрабатывается"</li>
                <li>Как только покупатели сделали заказы и вы не хотите их принимать до торговли, ставьте статус "Передан на исполнение".
                    Этот статус <span style="font-weight: bold;color: red;">нужно</span> ставить в любом случае!</li>
                <li>После торговли необходимо поставить статус "Выполнен". Тогда у покупателей так же изменится статус на "выполнен".</li>
            </ul>
        </div>
    </div>
@endsection