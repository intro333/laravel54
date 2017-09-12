@extends('admin.layouts.master')

@section('content')

    <div class="orders-all">
        @foreach($result as $item)
            <div class="orders-item">
            <div class="order-instruments not-active">
                <div class="order-info">
                    <span>Заказ № ST-{{ $item[0]['emailHash'] }}-{{ $item[0]['orderId'] }} от {{ $item[0]['orderDate'] }}</span>
                    <span>Дата доставки {{ $item[0]['orderDate'] }}</span>
                    <span>Период получения заказа {{ $item[0]['timeQuota'] }}</span>
                </div>
            </div>
            <table class="cart-products-table">
                <thead>
                <tr class="order-tr-head">
                    <th class="order-th-head">Заказ № ST-{{ $item[0]['emailHash'] }}-{{ $item[0]['orderId'] }} от {{ $item[0]['orderDate'] }}</th>
                    <th class="table-25-procent"></th>
                    <th class="table-25-procent"></th>
                    <th class="table-10-procent"></th>
                    <th class="table-10-procent"></th>
                </tr>
                <tr class="order-tr-head not-active">
                    <th class="table-30-procent">Продукт</th>
                    <th class="table-25-procent">Цена</th>
                    <th class="table-25-procent">Количество</th>
                    <th class="table-10-procent">Стоимость</th>
                    <th class="table-10-procent"></th>
                </tr>
                </thead>
                <tbody class="order-tbody not-active">
                @foreach($item as $key => $products)
                    @if ($key !== 0)
                        <tr id="1">
                            <td class="table-40-procent-td">
                                <img class="cart-product-image" src='/storage/images/products/{{ $products['image_path'] }}' />
                                <span>{{ $products['name'] }}</span>
                            </td>
                            <td>{{ $products['price'] }} ₽ / {{$products['unit'] }}</td>
                            <td>{{ $products['counts'] }}</td>
                            <td>{{ $products['cost'] }} ₽</td>
                            <td style="color: firebrick">
                            </td>
                        </tr>
                    @endif
                @endforeach
                </tbody>
            </table>
                </div>
        @endforeach
    </div>
@endsection
