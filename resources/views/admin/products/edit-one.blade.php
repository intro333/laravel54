@extends('admin.layouts.master')

@section('content')

    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h1>Редактирование продукта</h1>

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

    {!! Form::open(['route' => ['product.edit'], 'class' => 'form-horizontal', 'method' => 'POST', 'files' => true, "autocomplete" => "off"]) !!}
    {!! Form::hidden('product_id', old('name', $product->product_id)) !!}
    <div class="form-group">
        {!! Form::label('category_id', 'Выберите категорию', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('product_category_id', old('product_category_id', $product->category->name), ['class'=>'form-control', 'placeholder'=> '', 'readonly' => 'readonly']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('bar_code', 'Артикул продукта', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('bar_code', old('bar_code', $product->bar_code), ['class'=>'form-control', 'placeholder'=> 'ST1001', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('name', 'Имя продукта', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('name', old('name', $product->name), ['class'=>'form-control', 'placeholder'=> 'Введите имя продукта', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('description', 'Описание', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('description', old('description', $product->description), ['class'=>'form-control', 'placeholder'=> 'Введите описание', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('is_active', 'Статус', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::select('is_active', ['0' => 'Не активен', '1' => 'Активен'], $product->is_active, ['placeholder' => 'Выберите статус', 'class'=>'form-control', 'required' => 'required'])!!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('price', 'Цена', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::number('price', old('price', $product->price), ['class'=>'form-control', 'placeholder'=> '1500', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('unit', 'Мера', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('unit', old('unit', $product->unit), ['class'=>'form-control', 'placeholder'=> 'кг. или шт.', 'required' => 'required']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('image_path', 'Изображение', ['class'=>'col-sm-2 control-label']) !!}
        <div class="col-sm-10">
            @if ($product->image_path !== '')
            <img src="{{ '/storage/images/products/' . $product->image_path }}" width="190" height="190">
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


