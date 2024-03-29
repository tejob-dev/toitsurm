@extends('layouts.app')

@section('importer')
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        }
      }
    }
  }
</script>
<style>
    body {
        color: #566787;
        background: #f5f5f5;
        font-family: 'Varela Round', sans-serif;
        font-size: 13px;
    }
    .table-responsive {
        margin: 30px 0;
    }
    .table-wrapper {
        background: #fff;
        padding: 20px 25px;
        border-radius: 3px;
        min-width: 1000px;
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
    .table-title {        
        padding-bottom: 15px;
        background: #13067a;
        color: #fff;
        padding: 16px 30px;
        min-width: 100%;
        margin: -20px -25px 10px;
        border-radius: 3px 3px 0 0;
    }
    .table-title h2 {
        margin: 5px 0 0;
        font-size: 24px;
    }
    .table-title .btn-group {
        float: right;
    }
    .table-title .btn {
        color: #fff;
        float: right;
        font-size: 13px;
        border: none;
        min-width: 50px;
        border-radius: 2px;
        border: none;
        outline: none !important;
        margin-left: 10px;
    }
    .table-title .btn i {
        float: left;
        font-size: 21px;
        margin-right: 5px;
    }
    .table-title .btn span {
        float: left;
        margin-top: 2px;
    }
    table.table tr th, table.table tr td {
        border-color: #e9e9e9;
        padding: 12px 15px;
        vertical-align: middle;
    }
    table.table tr th:first-child {
        width: 60px;
    }
    table.table tr th:last-child {
        width: 100px;
    }
    table.table-striped tbody tr:nth-of-type(odd) {
        background-color: #fcfcfc;
    }
    table.table-striped.table-hover tbody tr:hover {
        background: #f5f5f5;
    }
    table.table th i {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
    }	
    table.table td:last-child i {
        opacity: 0.9;
        font-size: 22px;
        margin: 0 5px;
    }
    table.table td a {
        font-weight: bold;
        color: #566787;
        display: inline-block;
        text-decoration: none;
        outline: none !important;
    }
    table.table td a:hover {
        color: #2196F3;
    }
    table.table td a.edit {
        color: #FFC107;
    }
    table.table td a.delete {
        color: #F44336;
    }
    table.table td i {
        font-size: 19px;
    }
    table.table .avatar {
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
    }
    .pagination {
        float: right;
        margin: 0 0 5px;
    }
    .pagination li a {
        border: none;
        font-size: 13px;
        min-width: 30px;
        min-height: 30px;
        color: #999;
        margin: 0 2px;
        line-height: 30px;
        border-radius: 2px !important;
        text-align: center;
        padding: 0 6px;
    }
    .pagination li a:hover {
        color: #666;
    }	
    .pagination li.active a, .pagination li.active a.page-link {
        background: #03A9F4;
    }
    .pagination li.active a:hover {        
        background: #0397d6;
    }
    .pagination li.disabled i {
        color: #ccc;
    }
    .pagination li i {
        font-size: 16px;
        padding-top: 6px
    }
    .hint-text {
        float: left;
        margin-top: 10px;
        font-size: 13px;
    }    
    /* Custom checkbox */
    .custom-checkbox {
        position: relative;
    }
    .custom-checkbox input[type="checkbox"] {    
        opacity: 0;
        position: absolute;
        margin: 5px 0 0 3px;
        z-index: 9;
    }
    .custom-checkbox label:before{
        width: 18px;
        height: 18px;
    }
    .custom-checkbox label:before {
        content: '';
        margin-right: 10px;
        display: inline-block;
        vertical-align: text-top;
        background: white;
        border: 1px solid #bbb;
        border-radius: 2px;
        box-sizing: border-box;
        z-index: 2;
    }
    .custom-checkbox input[type="checkbox"]:checked + label:after {
        content: '';
        position: absolute;
        left: 6px;
        top: 3px;
        width: 6px;
        height: 11px;
        border: solid #000;
        border-width: 0 3px 3px 0;
        transform: inherit;
        z-index: 3;
        transform: rotateZ(45deg);
    }
    .custom-checkbox input[type="checkbox"]:checked + label:before {
        border-color: #03A9F4;
        background: #03A9F4;
    }
    .custom-checkbox input[type="checkbox"]:checked + label:after {
        border-color: #fff;
    }
    .custom-checkbox input[type="checkbox"]:disabled + label:before {
        color: #b8b8b8;
        cursor: auto;
        box-shadow: none;
        background: #ddd;
    }
    /* Modal styles */
    .modal .modal-dialog {
        max-width: 400px;
    }
    .modal .modal-header, .modal .modal-body, .modal .modal-footer {
        padding: 20px 30px;
    }
    .modal .modal-content {
        border-radius: 3px;
        font-size: 14px;
    }
    .modal .modal-footer {
        background: #ecf0f1;
        border-radius: 0 0 3px 3px;
    }
    .modal .modal-title {
        display: inline-block;
    }
    .modal .form-control {
        border-radius: 2px;
        box-shadow: none;
        border-color: #dddddd;
    }
    .modal textarea.form-control {
        resize: vertical;
    }
    .modal .btn {
        border-radius: 2px;
        min-width: 100px;
    }	
    .modal form label {
        font-weight: normal;
    }	
    </style>
    
    <script>
        $(document).ready(function(){
            // Activate tooltip
            $('[data-toggle="tooltip"]').tooltip();
        
            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function(){
                if(this.checked){
                    checkbox.each(function(){
                        this.checked = true;                        
                    });
                } else{
                    checkbox.each(function(){
                        this.checked = false;                        
                    });
                } 
            });
            checkbox.click(function(){
                if(!this.checked){
                    $("#selectAll").prop("checked", false);
                }
            });
            
            
        });
        
        function callDeleteAll(){
            $("#listitemid").val($("input[name='options[]']:checked").map(function(){ return $(this).val(); }).get());
            $("#typeproc").val(0);
            console.log("list selected");
        }
    </script>
@endsection

@section('content')
<div class="container">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Liste des personnes inscrites</h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#deleteEmployeeModal" onclick="callDeleteAll();"class="btn btn-white bg-white text-dark" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Supprimer les éléments cochés</span></a>
                        <a href="{{-- {{ /* route("home.export.all") */ }} --}}" class="btn btn-white bg-white text-dark" style="width:230px;"><span>Exporter tous en Excel</span></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-7">
                        <h2></h2>
                    </div>
                    <div class="col-sm-5 mt-2">
                        <form class="d-flex justify-content-end" action="{{-- {{ /* route("home.filter") */ }} --}}" method="post">
                            @csrf
                            <div class="relative w-full mx-2">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400 text-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" name="simplesearch" class="text-dark bg-white h-9 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Filtrer avec ..." required>
                            </div>
                            <select id="typeselect" name="typeselect" class="text-dark bg-white h-9 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value="0">Nom ou prénom</option>
                                <option value="1">Objectif</option>
                                <option value="2">Type de contrat</option>
                                <option value="3">Type du terrain</option>
                                <option value="4">Emplacement</option>
                            </select>                                 
                        </form>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="selectAll">
                                <label for="selectAll"></label>
                            </span>
                        </th>
                        <th>Nom Et Prénom</th>
                        <th>Téléphone</th>
                        <th>Email</th>
                        <th>Adresse</th>
                        {{-- <th>@sortablelink('created_at', 'Date de soumission')</th> --}}
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $key => $data)
                        
                        @if($data->id != Auth::user()->id)
                        <tr>
                            <td>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="{{$data->id}}">
                                    <label for="checkbox1"></label>
                                </span>
                            </td>
                            <td>{{$data->name}} {{$data->prenom}}</td>
                            <td>{{$data->telephone}}</td>
                            <td>{{$data->email}}</td>
                            <td>{{$data->adresse}}</td>
                            {{-- <td>{{date('d/m/Y', strtotime($data->created_at))}}</td> --}}
                            <td>
                                <a href="{{"/manage-histo/".$data->id}}" class="view"><i class="material-icons" data-toggle="tooltip" title="Voir l'historie de paiement">&#xE417;</i></a>
                                <a href="{{-- {{ /* route("home.edit", ["id"=>$data->id]) */ }} --}}" class="edit" ><i class="material-icons" data-toggle="tooltip" title="Editer le compte">&#xE254;</i></a>
                                <a href="{{"/manage-histo/".$data->id."/add"}}" class="create" ><i class="material-icons" data-toggle="tooltip" title="Enrégistrer un paiement">&#xeb81;</i></a>
                                <a href="#deleteEmployeeModal" onclick="document.getElementById('hideitemid').value = {{$data->id}}; document.getElementById('typeproc').value = 1;" class="delete" data-toggle="modal" ><i class="material-icons" data-toggle="tooltip" title="Supprimer cet élément">&#xE872;</i></a>
                                <a href="{{"/espace-client/".$data->id}}" class="write" ><i class="material-icons" data-toggle="tooltip" title="Ecrire un message">&#xe0b7;</i></a>
                            </td>
                        </tr>
                        @endif
                    
                    @endforeach
                </tbody>
            </table>
            <div class="flex items-center mt-2">
                <span class="mr-4 ml-4">
                    {{$users->links();}}
                </span>
                <p style="font-size: 18px;">
                    Affichage {{$users->count()}} sur {{ $users->total() }} soumission(s).
                </p>
            </div>
        </div>
    </div>
    <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="post" action="{{-- {{ /* route("home.delete") */ }} --}}" >
                    @csrf
                    <div class="modal-header">						
                        <h4 class="modal-title">Suppression d'un ou plusieurs éléments</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">					
                        <p>Vous êtes sûr de vouloir supprimer ? </p>
                        <p class="text-warning"><small>Cela est irrévocable.</small></p>
                    </div>
                    <input type="hidden" name="listitem[]" id="listitemid" />
                    <input type="hidden" name="itemid" id="hideitemid" />
                    <input type="hidden" name="typeproc" id="typeproc" />
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Annuler">
                        <input type="submit" class="btn btn-warning" value="Oui">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
