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
        background: #806c61;
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
    input[type="checkbox"]:checked + label::after {
       content: '';
       position: absolute;
       width: 1.2ex;
       height: 0.4ex;
       background: rgba(0, 0, 0, 0);
       top: 0.9ex;
       left: 0.4ex;
       border: 3px solid brown;
       border-top: none;
       border-right: none;
       -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
       -o-transform: rotate(-45deg);
       -ms-transform: rotate(-45deg);
       transform: rotate(-45deg);
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
                        <h2>Liste des groupes enrégistrés</h2>
                    </div>
                    <div class="col-sm-6">
                        <div class="d-flex justify-content-end" style="width:450px; margin-left: auto;">
                            <!--<a href="#deleteEmployeeModal" onclick="callDeleteAll();"class="btn btn-white bg-white text-dark" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Supprimer les éléments cochés</span></a>-->
                            <a href="/manage-groupe/export/all" class="btn btn-white bg-white text-dark" style="width:230px;"><span>Exporter en Excel</span></a>
                            <!--Okay-->
                        </div>
                        <div class="d-flex justify-content-end my-2" style="width: 450px; margin-left: auto;">
                            <form action="/groupes/filter" method="post" class="w-50">
                                @csrf
                                <input type="text" id="simplesearch" name="simplesearch" placeholder="Filtrer avec.." class="form-control w-100">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <!--<th>-->
                        <!--    <span class="custom-checkbox">-->
                        <!--        <input type="checkbox" id="selectAll">-->
                        <!--        <label for="selectAll"></label>-->
                        <!--    </span>-->
                        <!--</th>-->
                        <th>Nom du groupement</th>
                        <th>Type du groupement</th>
                        <th>Secteur d'activité</th>
                        <th>Personne ressource</th>
                        <th>Téléphone</th>
                        {{-- <th>@sortablelink('created_at', 'Date de element')</th> --}}
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($groupements as $key => $data)
                    
                        <tr>
                            <!--<td>-->
                            <!--    <span class="custom-checkbox">-->
                            <!--        <input type="checkbox" id="checkbox1" name="options[]" value="{{$data->id}}">-->
                            <!--        <label for="checkbox1"></label>-->
                            <!--    </span>-->
                            <!--</td>-->
                            <td>{{isset($data->name_prename)?$data->name_prename:""}}</td>
                            <td>{{isset($data->groupement)?$data->groupement:"Pas de donnée"}}</td>
                            <td>{{isset($data->secteur)?$data->secteur:"Pas de donnée"}}</td>
                            <td>{{($data->pers_res != null)?$data->pers_res:"Pas de donnée"}}</td>
                            <td>{{isset($data->contact)?$data->contact:"Pas de donnée"}}</td>
                            {{-- <td>{{date('d/m/Y', strtotime($data->created_at))}}</td> --}}
                            <td>
                                {{-- <a href="{{"/manage-groupe/".$data->id}}" class="view"><i class="material-icons" data-toggle="tooltip" title="Voir les détails">&#xE417;</i></a> --}}
                                <a href="{{'/manage-groupe/'.$data->id.'/edit'}}" class="edit"><i class="material-icons" data-toggle="tooltip" title="Edit les détails">&#xE3C9;</i></a>
                                <a href="#deleteEmployeeModal" onclick="document.getElementById('hideitemid').value = {{$data->id}}; document.getElementById('typeproc').value = 1;" class="delete" data-toggle="modal" ><i class="material-icons" data-toggle="tooltip" title="Supprimer cet élément">&#xE872;</i></a>
                            </td>
                        </tr>
                    
                    @endforeach
                </tbody>
            </table>
            <div class="flex items-center mt-2">
                <span class="mr-4 ml-4">
                    {{$groupements->links();}}
                </span>
                <p style="font-size: 18px;" >
                    Affichage {{$groupements->count()}} sur {{ $groupements->total() }} groupement(s).
                </p>
            </div>
        </div>
    </div>
    <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="post" action="/manage-groupe/delete" >
                    @csrf
                    <div class="modal-header">						
                        <h4 class="modal-title">Suppression d'un ou plusieurs éléments</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">					
                        <p>Vous êtes sûr de vouloir supprimer ? </p>
                        <p class="text-warning" style="text-color:#13067a;"><small>Cela est irrévocable.</small></p>
                    </div>
                    <input type="hidden" name="listitem[]" id="listitemid" />
                    <input type="hidden" name="itemid" id="hideitemid" />
                    <input type="hidden" name="typeproc" id="typeproc" />
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Annuler">
                        <input type="submit" class="btn btn-warning" style="border-color:#13067a;" value="Oui">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
