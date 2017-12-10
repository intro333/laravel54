@extends('admin.layouts.master')

@section('content')

    <div class="row">
        <div class="col-sm-10 col-sm-offset-2">
            <h1>Квоты.</h1>

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
    @foreach($quotes as $quota)
        <div class="form-group">
            {!! Form::label('time_quota', $quota->time_quota, ['class'=>'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::text('counts_quota', old('description', $quota->counts_quota), ['class'=>'form-control', 'disabled' => 'disabled']) !!}
            </div>
        </div>
    @endforeach
@endsection