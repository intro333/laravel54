@extends('admin.layouts.master')

@section('content')

    <p>{!! link_to_route('category.view.add', 'Добавить категорию', [], ['class' => 'btn btn-success']) !!}</p>

    @if($categories->count() > 0)
        <div class="portlet box green">
            <div class="portlet-title">
                <div class="caption">Все категории</div>
            </div>
            <div class="portlet-body">
                <table id="datatable" class="table table-striped table-hover table-responsive datatable">
                    <thead>
                        <tr>
                            <th>Категории</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>

                    <tbody>
                        @foreach ($categories as $category)
                            <tr>
                                <td>{{ $category->name }}</td>
                                <td>
                                    {!! link_to_route('category.view.edit.one', 'Редактировать', [$category->category_id], ['class' => 'btn btn-xs btn-info']) !!}
                                    {!! Form::open(['style' => 'display: inline-block;', 'method' => 'POST', 'onsubmit' => 'return confirm(\'' . 'Вы точно хотите удалить эту категорию?' . '\');',  'route' => ['category.del', $category->category_id]]) !!}
                                    {!! Form::submit('Удалить', ['class' => 'btn btn-xs btn-danger']) !!}
                                    {!! Form::close() !!}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    @else
        Нет категорий
    @endif

@endsection

