@extends('layouts.app')

@section('content')
<div class="container">
    <h3 id="forms">
        <div align="center" class="my-5 fw-bold">Création d'une fiche de paiement<a class="anchorjs-link " href="#forms" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div>
    </h3>
    <div class="row container d-flex justify-content-center">
    
        <form class="rounded border border-dark border-2" id="logout-form" action="/manage-histo/add" method="POST">
            @csrf
            <div class="col"> {{-- -md-8 --}}
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="text-right">Création de réçu du client : {{$user->name}} {{$user->prenom}}</h6>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label for="num_recu_pay">Numero du réçu</label>
                            <input type="text" class="form-control" name="num_recu_pay" placeholder="">
                        </div>
                        <div class="col-md-6">
                            <label for="moyen_pay">Moyen de paiement</label>
                            <input type="text" class="form-control" name="moyen_pay">
                        </div>
                    </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label for="montant_paye">Montant payé</label>
                            <input type="number" class="form-control" name="montant_paye">
                        </div>
                        <div class="col-md-6">
                            <label for="reste_paye">Reste à payé</label>
                            <input type="number" class="form-control" name="reste_paye" >
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label for="date_paye">Date du paiement</label>
                            <input type="date" class="form-control" name="date_paye">
                        </div>
                        <div class="col-md-6">
                            <label for="observation">Observation</label>
                            <textarea class="form-control" name="observation" rows="4" placeholder=""></textarea>
                        </div>
                    </div>
                    <input type="hidden" class="form-control" name="user_id" value="{{$user->id}}">
                    <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="submit">Enregistrer</button></div>
                </div>
            </div>
        </form>
    
    </div>
</div>
@endsection