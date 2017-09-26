@extends('admin.layouts.master')

@section('content')

    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h1>Редактирование категории</h1>

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

    {!! Form::open(['route' => ['category.edit'], 'class' => 'form-horizontal', 'method' => 'POST', 'files' => true, "autocomplete" => "off"]) !!}
    {!! Form::hidden('category_id', old('category_id', $category->category_id)) !!}
    <div class="form-group">
        {!! Form::label('name', 'Имя категории', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('name', old('name', $category->name), ['class'=>'form-control', 'placeholder'=> 'Введите имя категории', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('description', 'Описание', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('description', old('description', $category->description), ['class'=>'form-control', 'placeholder'=> 'Введите описание', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('is_active', 'Статус', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::select('is_active', ['0' => 'Не активен', '1' => 'Активен'], $category->is_active, ['placeholder' => 'Выберите статус', 'class'=>'form-control', 'required' => 'required'])!!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('image_path', 'Изображение', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            @if ($category->image_path !== '')
                <img src="{{ '/storage/images/categories/' . $category->image_path }}" width="190" height="190">
            @else
                {!! Form::text('image_path', old('image_path', 'Нет изображения'), ['class'=>'form-control', 'readonly' => 'readonly']) !!}
            @endif
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('image', 'Добавить изображение', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::file('image', ['class'=>'image-for-admin-panel']) !!}
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            {!! Form::submit('Отправить', ['class' => 'btn btn-primary']) !!}
        </div>
    </div>

    {!! Form::close() !!}

@endsection


