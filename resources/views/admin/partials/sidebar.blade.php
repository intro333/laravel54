<style>
    .logout:hover {
        color: #a0a0a0;
    }
</style>
{{--{{ dd(explode('/',Request::path())[3]) }}--}}
<div class="page-sidebar-wrapper">
    <div class="page-sidebar navbar-collapse collapse">
        {{--{{ dd(Request::path()) }}--}}
        <ul class="page-sidebar-menu"
            data-keep-expanded="false"
            data-auto-scroll="true"
            data-slide-speed="200">
            {{--<li @if(Request::path() == '/admin/categories') class="active" @endif>--}}
            <li @if(Request::path() == 'admin/orders') class="active" @endif>
                <a href="/admin/orders">
                    <i class="fa fa-shopping-cart"></i>
                    <span class="title">Заказы</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="sub-menu">
                    {{--                    <li @if(isset(explode('/',Request::path())[2]) && explode('/',Request::path())[2] == strtolower('/add')) class="active active-sub" @endif>--}}
                    <li @if(Request::path() == 'admin/orders/new') class="active active-sub" @endif>
                        <a href="/admin/orders/new">
                            <i class="fa fa-newspaper-o"></i>
                            <span class="title">
                                Новые
                            </span>
                        </a>
                    </li>
                    <li @if(Request::path() == 'admin/orders/date') class="active active-sub" @endif>
                        <a href="{{ route('orders.view.delivery') }}">
                            <i class="fa fa-calendar"></i>
                            <span class="title">
                                Дата доставки
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li @if(Request::path() == 'admin/users') class="active" @endif>
                <a href="/admin/users">
                    <i class="fa fa-shopping-cart"></i>
                    <span class="title">Пользователи</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li @if(Request::path() == 'admin/users/all') class="active active-sub" @endif>
                        <a href="/admin/users/all">
                            <i class="fa fa-newspaper-o"></i>
                            <span class="title">
                                Список
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/admin/categories">
                    <i class="fa fa-puzzle-piece"></i>
                    <span class="title">Категории</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="sub-menu">
{{--                    <li @if(isset(explode('/',Request::path())[2]) && explode('/',Request::path())[2] == strtolower('/add')) class="active active-sub" @endif>--}}
                    <li @if(Request::path() == 'admin/categories/add') class="active active-sub" @endif>
                        <a href="/admin/categories/add">
                            <i class="fa fa-plus"></i>
                            <span class="title">
                                Добавить
                            </span>
                        </a>
                    </li>
                    <li @if(Request::path() == 'admin/categories/edit' ||
                    (isset(explode('/', Request::path())[1]) && explode('/',Request::path())[1] === 'categories' &&
                    isset(explode('/', Request::path())[2]) &&  explode('/',Request::path())[2] === 'edit' &&
                    isset(explode('/', Request::path())[3])))) class="active active-sub" @endif>
                        <a href="/admin/categories/edit">
                            <i class="fa fa-pencil fa-fw"></i>
                            <span class="title">
                                Редактировать
                            </span>
                        </a>
                    </li>
                    {{--<li @if(Request::path() == 'admin/categories/del') class="active active-sub" @endif>--}}
                        {{--<a href="/admin/categories/del">--}}
                            {{--<i class="fa fa-trash-o fa-fw"></i>--}}
                            {{--<span class="title">--}}
                                {{--Удалить--}}
                            {{--</span>--}}
                        {{--</a>--}}
                    {{--</li>--}}
                </ul>
            </li>
            <li>
                <a href="/admin/products">
                    <i class="fa fa-cutlery"></i>
                    <span class="title">Продукты</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="sub-menu">
{{--                    <li @if(isset(explode('/',Request::path())[2]) && explode('/',Request::path())[2] == strtolower('/add')) class="active active-sub" @endif>--}}
                    <li @if(Request::path() == 'admin/products/add') class="active active-sub" @endif>
                        <a href="/admin/products/add">
                            <i class="fa fa-plus"></i>
                            <span class="title">
                                Добавить
                            </span>
                        </a>
                    </li>
                    <li @if(Request::path() == 'admin/products/edit' ||
                    (isset(explode('/', Request::path())[1]) && explode('/', Request::path())[1] === 'products' &&
                    isset(explode('/', Request::path())[2]) && explode('/',Request::path())[2] === 'edit' &&
                    isset(explode('/', Request::path())[3]))) class="active active-sub" @endif>
                        <a href="/admin/products/edit">
                            <i class="fa fa-pencil fa-fw"></i>
                            <span class="title">
                                Редактировать
                            </span>
                        </a>
                    </li>
                    {{--<li @if(Request::path() == 'admin/products/del') class="active active-sub" @endif>--}}
                        {{--<a href="/admin/products/del">--}}
                            {{--<i class="fa fa-trash-o fa-fw"></i>--}}
                            {{--<span class="title">--}}
                                {{--Удалить--}}
                            {{--</span>--}}
                        {{--</a>--}}
                    {{--</li>--}}
                </ul>
            </li>
            <li>
                <form action="/admin/logout">
                    <button type="submit" class="logout">
                        <i class="fa fa-sign-out fa-fw"></i>
                        <span class="title">Выход</span>
                    </button>
                </form>
            </li>
        </ul>
    </div>
</div>
