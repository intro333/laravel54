<style>
    .logout:hover {
        color: #a0a0a0;
    }
</style>
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
                </a>
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
                    <li @if(Request::path() == 'admin/categories/edit') class="active active-sub" @endif>
                        <a href="/admin/categories/edit">
                            <i class="fa fa-pencil fa-fw"></i>
                            <span class="title">
                                Редактировать
                            </span>
                        </a>
                    </li>
                    <li @if(Request::path() == 'admin/categories/del') class="active active-sub" @endif>
                        <a href="/admin/categories/del">
                            <i class="fa fa-trash-o fa-fw"></i>
                            <span class="title">
                                Удалить
                            </span>
                        </a>
                    </li>
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
                    <li @if(Request::path() == 'admin/products/edit') class="active active-sub" @endif>
                        <a href="/admin/products/edit">
                            <i class="fa fa-pencil fa-fw"></i>
                            <span class="title">
                                Редактировать
                            </span>
                        </a>
                    </li>
                    <li @if(Request::path() == 'admin/products/del') class="active active-sub" @endif>
                        <a href="/admin/products/del">
                            <i class="fa fa-trash-o fa-fw"></i>
                            <span class="title">
                                Удалить
                            </span>
                        </a>
                    </li>
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
