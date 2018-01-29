@extends('admin.layouts.master')

@section('content')

    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h1>Редактирование даты доставки</h1>

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

    {!! Form::open(['route' => ['orders.delivery'], 'class' => 'form-horizontal', 'method' => 'POST', "autocomplete" => "off"]) !!}
    {!! Form::hidden('delivery_date_id', old('delivery_date_id', $delivery->delivery_date_id)) !!}
    <div class="form-group">
        {!! Form::label('delivery_date', 'Дата доставки', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('delivery_date', old('name', $delivery->delivery_date->format('Y-m-d')), ['class'=>'form-control', 'required' => 'required', 'id' => 'datepicker']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('delivery_message', 'Сообщение', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('delivery_message', old('description', $delivery->delivery_message), ['class'=>'form-control', 'placeholder'=> 'Здесь можно ввести комментарий']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('status', 'Статус', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            @if($delivery->status === 0)
            {!! Form::select('status', ['0' => 'Не активен', '1' => 'Активен'], null, ['placeholder' => 'Выберите статус', 'class'=>'form-control', 'required' => 'required'])!!}
            @else
                {!! Form::select('status', ['0' => 'Не активен', '1' => 'Активен'], $delivery->status, ['placeholder' => 'Выберите статус', 'class'=>'form-control', 'required' => 'required'])!!}
            @endif
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            {!! Form::submit('Отправить', ['class' => 'btn btn-primary']) !!}
        </div>
    </div>
    {!! Form::close() !!}

    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h3>Когда и как правильно изменять дату доставки.</h3>
            <ul style="font-size: 16px;">
                <li>Если статус доставки "Активен", то покупатели могут добавлять продукты в корзину и делать заказы.</li>
                <li>Статус "Не активен" выставляется автоматически после того, как вы в разделе "Управления статусами" выбрали
                статус заказов "Выполнен". В этом случае покупатели не могут совершать заказы.</li>
                <li>Выставляйте дату доставки и статус "Активен", если вы готовы принять заказы</li>
            </ul>
        </div>
    </div>

    <script>

    </script>
@endsection


