@extends('admin.layouts.master')

@section('content')
    <h2>Заказы по продуктам(со статусом "<b>обрабатывается</b>").</h2>
    <div class="orders-all">
    <!-- Все заказы по продуктам -->
        <div class="orders-item">
            <table class="cart-products-table">
                <tr class="order-tr-head tr_opened">
                    <th class="table-30-procent">Продукт</th>
                    <th class="table-25-procent">КГ</th>
                    <th class="table-25-procent">Поштучно</th>
                    <th class="table-10-procent"></th>
                    <th class="table-10-procent"></th>
                </tr>
                <tbody class="order-tbody">
                @foreach($result as $k => $item)
                    <tr>
                        <td class="table-40-procent-td">
                            <img class="cart-product-image" src='/storage/images/products/{{ $item[0]['image_path'] }}' />
                            <span>{{ $item[0]['name'] }}</span>
                        </td>
                        <td>{{ $item[0]['kg'] }} кг</td>
                        <td>{{ $item[0]['pieces'] }} шт</td>
                        <td style="color: firebrick"></td>
                        <td style="color: firebrick"></td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
