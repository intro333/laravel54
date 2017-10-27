@extends('admin.layouts.master')

@section('content')

    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h1>Добавить категорию</h1>

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

    {!! Form::open(['route' => 'category.form.add', 'class' => 'form-horizontal', 'files' => true, "autocomplete" => "off"]) !!}

    <div class="form-group">
        {!! Form::label('name', 'Имя категории', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('name', old('name'), ['class'=>'form-control', 'placeholder'=> 'Введите название категории', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('description', 'Описание', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('description', old('description'), ['class'=>'form-control', 'placeholder'=> 'Введите описание', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('image', 'Изображение', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::file('image', ['required' => 'required', 'class'=>'image-for-admin-panel']) !!}
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            {!! Form::submit('Добавить', ['class' => 'btn btn-primary']) !!}
        </div>
    </div>

    {!! Form::close() !!}

@endsection


