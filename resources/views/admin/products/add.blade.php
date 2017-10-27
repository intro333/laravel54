@extends('admin.layouts.master')

@section('content')

    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h1>Добавить продукт</h1>

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

    {!! Form::open(['route' => 'product.form.add', 'class' => 'form-horizontal', 'files' => true]) !!}

    <div class="form-group">
        {!! Form::label('category_id', 'Выберите категорию', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::select('category_id', $categories, null, ['placeholder' => '', 'class'=>'form-control', 'required' => 'required'])!!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('bar_code', 'Артикул продукта', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('bar_code', old('bar_code'), ['class'=>'form-control', 'placeholder'=> 'ST1001', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('name', 'Имя продукта', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('name', old('name'), ['class'=>'form-control', 'placeholder'=> 'Говядина', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('description', 'Описание', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('description', old('description'), ['class'=>'form-control', 'placeholder'=> 'Говядина', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('price', 'Цена', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::number('price', old('price'), ['class'=>'form-control', 'placeholder'=> '1500', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('unit', 'Мера', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('unit', old('unit'), ['class'=>'form-control', 'placeholder'=> 'кг. или шт.', 'required' => 'required']) !!}
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


