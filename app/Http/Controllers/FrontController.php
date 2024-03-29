<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Parrain;
use App\Mail\GoodSubmited;
use App\Mail\ReContact;
use App\Mail\ReParrain;
use App\Mail\GoodContact;
use App\Mail\GoodSubmitedToMe;
use App\Models\Soumission;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        return view("frontend.index");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function understand()
    {
        
        return view("frontend.gotocomprendre");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function itemselect()
    {
        
        return view("frontend.item-select");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function gallery()
    {
        
        return view("frontend.gallery");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function parrainage()
    {
        
        return view("frontend.parrain");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function quiz()
    {
        
        return view("frontend.forms");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function quiz2()
    {
        
        return view("frontend.forms2");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function contact()
    {
        
        return view("frontend.contact");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function formsee(Request $request, $idorm)
    {
        $data = '{}';
        return response()->json("{}", 200);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function formsubmission(Request $request)
    {
        //dd($request->formData);
        $dataJs = json_decode($request->formData, true);
        $data = [];
        $passer = new \stdClass();
        $iter = 1; 
        if(isset($dataJs['answers'])){
            
            $soumiss = Soumission::create([]);
            foreach($dataJs['answers'] as $key => $val){
                $inserted = "question_".$iter;
                if(gettype($val['value']) == "array"){
                    $tostr = implode(", ", $val['value']);
                    $data[] = $tostr;  
                    $soumiss->update(["".$inserted => "".$tostr]);
                }else{
                    //$datas->$inserted = $val['value'];
                    $data[] = $val['value'];  
                    $soumiss->update(["".$inserted => $val['value']]);
                }
                $iter = $iter + 1;
            }
            
        }
        
        $passer->email = $data[sizeof($data)-6];
        $passer->nom = $data[sizeof($data)-4];
        $passer->prenom = $data[sizeof($data)-5];
        
        if(isset($passer->email)!=false) {
                
            
            try{
                Mail::to($passer->email)->send(new GoodSubmited($passer));
            }catch(\Exception $e){
            
            }
            
            
        }
        
        try{
            Mail::to("infos@toitsurmesure.com")->send(new GoodSubmitedToMe($passer));
        }catch(\Exception $e){
        
        }
            
        //dd($datas);
        $respo = ['success' => true, 'data' => ["status" => "completed"]];
        return response()->json($respo, 200);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function saveparrain(Request $request)
    {
        $item = Parrain::create($request->all());
        $passer = new \stdClass();
        
        $passer->email = $request->email;
        
        try{
            $passer->nom = $request->nom;
            $passer->prenom = $request->prenom;
            
            $passer->nomf = $request->parnom;
            $passer->prenomf = $request->parprenom;
        }catch(\Exception $e){
        
        }
        
        if(isset($passer->email) != false){
            try{
                Mail::to($passer->email)->send(new ReParrain($passer));
            }catch(\Exception $e){
            
            }
        }
        
        try{
            Mail::to("infos@toitsurmesure.com")->send(new GoodContact($passer));
        }catch(\Exception $e){
        
        }
        
        return redirect()->to("/");
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function savecontact(Request $request)
    {
        $item = Contact::create($request->all());
        $passer = new \stdClass();
        
        $passer->email = $request->email;
        
        try{
            $passer->nom = $request->nom;
            $passer->prenom = $request->prenom;
            $passer->telephone = $request->telephone;
            $passer->message = $request->message;
        }catch(\Exception $e){
        
        }
        
        if(isset($passer->email) != false){
            try{
                Mail::to($passer->email)->send(new ReContact($passer));
            }catch(\Exception $e){
            
            }
        }
        
        
        try{
            Mail::to("infos@toitsurmesure.com")->send(new GoodContact($passer));
        }catch(\Exception $e){
        
        }
        
        
        return redirect()->to("/");
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
