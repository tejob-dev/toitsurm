@extends('layouts.app')

@section('content')
<div class="container">
    <h3 id="forms">
        <div align="center" class="my-5 fw-bold">Création une place sur DreamCity<a class="anchorjs-link " href="#forms" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div>
    </h3>
    <div class="row container d-flex justify-content-center">
    
        <form class="rounded border border-dark border-2" id="logout-form" enctype="multipart/form-data" action="/manage-dream/add" method="POST">
            @csrf
            <div class="col"> {{-- -md-8 --}}
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="text-right">Création d'une place DreamCity</h6>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label for="num_recu_pay">Libellé du lieu</label>
                            <input type="text" class="form-control" name="lib_lieu" placeholder="">
                        </div>
                        <div class="col-md-6">
                            <label for="moyen_pay">La situation géographique</label>
                            <input type="text" class="form-control" name="position">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label for="observation">Description du lieu</label>
                            <textarea class="form-control" name="message" rows="4" placeholder=""></textarea>
                        </div>
                        <div class="col-md-6">
                            <label for="date_paye">Liste de la gallery d'image</label>
                            <input class="form-control" type="file" name="images[]"  accept="image/*" multiple="multiple">
                        </div>
                    </div>
                    <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="submit">Enregistrer</button></div>
                </div>
            </div>
        </form>
    
    </div>
</div>
@endsection