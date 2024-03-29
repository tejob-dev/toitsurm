@extends('layouts.app')

@section('content')
<div class="container">
    <h3 id="forms">
        <div align="center" class="my-5 fw-bold">Les histories de paiement<a class="anchorjs-link " href="#forms" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div>
    </h3>
    <div class="row container d-flex justify-content-center">
    
        <div class="col-lg-8 grid-margin stretch-card">
          <div class="card rounded-3">
            <div class="card-body">
              <h4 class="card-title">Les versements du client : {{$user->name}} {{$user->prenom}}</h4>
              {{-- <p class="card-description">
                Basic table with card
              </p> --}}
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>No du reçu</th>
                      <th>Moyen paiement</th>
                      <th>Montant payé</th>
                      <th>Reste à payé</th>
                      <th>Date de paiement</th>
                    </tr>
                  </thead>
                  <tbody>
                    @php $nbr = $allpay->count(); @endphp
                    @foreach($allpay as $key => $data )
                    <tr>
                      <td>{{$data->num_recu_pay}}</td>
                      <td>{{$data->moyen_pay}}</td>
                      <td>{{$data->montant_paye}}</td>
                      <td>{{$data->reste_paye}}</td>
                      <td>{{date("d/m/Y", strtotime($data->date_paye))}}</td>
                    </tr>
                    <tr>
                      <td><strong>Observation&nbsp;:</strong></td>
                      <td colspan="4">{{$data->observation}}</td>
                    </tr>
                        @if($key < ($nbr-1))
                        <tr>
                            <td colspan="5">
                                <hr class="h-4 bg-dark">
                            </td>
                        </tr>
                        @endif
                    @endforeach
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    
    </div>
</div>
@endsection