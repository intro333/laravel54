@extends('admin.layouts.master')

@section('content')
    <h2>Список всех пользователей.</h2>
    <div class="orders-all">
        <!-- Панель для фильтрации и поиска -->
    @include('admin.partials.users-filter')
    <!-- Все заказы-->
        @foreach($users as $user)
            <div class="orders-item"
                 order-number="{{ $user->email }}"
                 phone-number="{{ preg_replace("/[^0-9]/","",$user->details[0]->phone) }}"
                 names="{{ $user->details[0]['sname'] . ' ' . $user->details[0]['name'] . ' ' . $user->details[0]['mname'] }}"
            >
                <div class="order-instruments not-active">
                    <div class="order-info">
                        <span><b>Электронная почта:</b>&nbsp;&nbsp;{{  $user->email }}</span>
                        <span><b>Покупатель:</b>&nbsp;&nbsp;{{ $user->details[0]->sname . ' ' . $user->details[0]->name . ' ' . $user->details[0]->mname }}</span>
                        <span><b>Телефон:</b>&nbsp;&nbsp;{{ $user->details[0]->phone }}</span>
                        <span><b>Активность:</b>&nbsp;&nbsp;{{ $user->is_active }}</span>
                        <span><b>Дата рождения:</b>&nbsp;&nbsp;{{ $user->details[0]->birthdate }}</span>
                    </div>
                </div>
                <table class="cart-products-table">
                    <thead>
                        <tr class="order-tr-head">
                            <th class="order-th-head">{{ $user->details[0]->sname . ' ' . $user->details[0]->name . ' ' . $user->details[0]->mname }}&nbsp;
                                тел.&nbsp;{{ $user->details[0]->phone }}
                            </th>
                            <th class="table-25-procent"></th>
                            <th class="table-25-procent"></th>
                            <th class="table-10-procent"></th>
                            <th class="table-10-procent"></th>
                        </tr>
                        <tr class="order-tr-head tr_opened not-active" style="height: 40px;background: #6bd87b !important;">
                            <th class="table-30-procent"></th>
                            <th class="table-25-procent"></th>
                            <th class="table-25-procent"></th>
                            <th class="table-10-procent"></th>
                            <th class="table-10-procent"></th>
                        </tr>
                    </thead>
                </table>
            </div>
        @endforeach
    </div>
@endsection
