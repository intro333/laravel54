<div id="filter-panel" class="collapse filter-panel">
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="form-inline">
                <div class="form-group">
                    <label class="filter-col" style="margin-right:0;" for="pref-perpage">Период:</label>
                    <select id="pref-period" class="form-control">
                        <option value='0'></option>
                        <option value='9:00-9:30'>9:00-9:30</option>
                        <option value='9:30-10:00'>9:30-10:00</option>
                        <option value='10:00-10:30'>10:00-10:30</option>
                        <option value='10:30-11:00'>10:30-11:00</option>
                        <option value='11:00-11:30'>11:00-11:30</option>
                        <option value='11:30-12:00'>11:30-12:00</option>
                        <option value='12:00-12:30'>12:00-12:30</option>
                        <option value='12:30-13:00'>12:30-13:00</option>
                        <option value='13:00-13:30'>13:00-13:30</option>
                        <option value='13:30-14:00'>13:30-14:00</option>
                        <option value='14:00-14:30'>14:00-14:30</option>
                        <option value='14:30-15:00'>14:30-15:00</option>
                        <option value='15:00-15:30'>15:00-15:30</option>
                        <option value='15:30-16:00'>15:30-16:00</option>
                        <option value='16:00-16:30'>16:00-16:30</option>
                        <option value='16:30-17:00'>16:30-17:00</option>
                        <option value='17:00-17:30'>17:00-17:30</option>
                        <option value='17:30-18:00'>17:30-18:00</option>
                        <option value='18:00-18:30'>18:00-18:30</option>
                        <option value='18:30-19:00'>18:30-19:00</option>
                    </select>
                </div> <!-- form group [rows] -->
                    <input type="text" class="form-control input-sm input-style" id="pref-search" placeholder="№ заказа">
                    <input type="text" class="form-control input-sm input-style" id="pref-phone" placeholder="Телефон">
                    <input type="text" class="form-control input-sm input-style" id="pref-names" placeholder="Имя, фамилия или отчество">
                    {{--<select id="pref-orderby" class="form-control">--}}
                        {{--<option>Descendent</option>--}}
                    {{--</select>--}}
                {{--</div> <!-- form group [order by] -->--}}
                {{--<div class="form-group">--}}
                    {{--<div class="checkbox" style="margin-left:10px; margin-right:10px;">--}}
                        {{--<label><input type="checkbox"> Remember parameters</label>--}}
                    {{--</div>--}}
                    {{--<button type="submit" class="btn btn-default filter-col">--}}
                        {{--<span class="glyphicon glyphicon-record"></span> Save Settings--}}
                    {{--</button>--}}
                {{--</div>--}}
            </div>
        </div>
    </div>
</div>
<button type="button"
        class="btn btn-primary not-clear"
        data-toggle="collapse"
        data-target="#filter-panel"
        style="width: 200px;"
        id="filter-panel-button"
>Поиск и фильтры</button>