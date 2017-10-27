@extends('admin.layouts.master')

@section('content')

    <p>{!! link_to_route('product.view.add', 'Добавить продукт', [], ['class' => 'btn btn-success']) !!}</p>

    @if($products->count() > 0)
        <div class="portlet box green">
            <div class="portlet-title">
                <div class="caption">Все продукты</div>
            </div>
            <div class="portlet-body">
                <table id="datatable" class="table table-striped table-hover table-responsive datatable">
                    <thead>
                        <tr>
                            <th>Продукты</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>

                    <tbody>
                        @foreach ($products as $product)
                            <tr>
                                <td>{{ $product->name }}</td>
                                <td>
                                    {!! link_to_route('product.view.edit.one', 'Редактировать', [$product->product_id], ['class' => 'btn btn-xs btn-info']) !!}
                                    {!! Form::open(['style' => 'display: inline-block;', 'method' => 'POST', 'onsubmit' => 'return confirm(\'' . 'Вы точно хотите удалить этот продукт?' . '\');',  'route' => ['product.del', $product->product_id]]) !!}
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
        Нет продуктов
    @endif

@endsection

