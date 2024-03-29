@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="container">
            @livewire('convad', ['users' => $users, 'messages' => $messages, 'sender' => $sender])
        </div>
    </div>
@endsection
