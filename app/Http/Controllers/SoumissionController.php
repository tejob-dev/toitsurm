<?php

namespace App\Http\Controllers;

use App\Models\Soumission;
use App\Models\Parrain;
use Illuminate\Http\Request;

class SoumissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $soumissions = Soumission::orderBy("created_at", "desc")->paginate(15);
        //dd($soumissions);
        return view('admin.soumission', compact("soumissions"));
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allparrain()
    {
        $allparrains = Parrain::orderBy("created_at", "desc")->paginate(15);
        //dd($soumissions);
        return view('admin.allparrain', compact("allparrains"));
    }
    
    /**
     * Show the application dashboard.
     *
     */
    public function filter(Request $request)
    {   
        //dd($request);
        
        
        $soumissions = Soumission::where("question_1", "like", "%".$request->simplesearch."%")
        ->orWhere("question_2", "like", "%".$request->simplesearch."%")
        ->orWhere("question_3", "like", "%".$request->simplesearch."%")
        ->orWhere("question_4", "like", "%".$request->simplesearch."%")
        ->orWhere("question_5", "like", "%".$request->simplesearch."%")
        ->orWhere("question_6", "like", "%".$request->simplesearch."%")
        ->orWhere("question_7", "like", "%".$request->simplesearch."%")
        ->orWhere("question_8", "like", "%".$request->simplesearch."%")
        ->orWhere("question_9", "like", "%".$request->simplesearch."%")
        ->orWhere("question_10", "like", "%".$request->simplesearch."%")
        ->orWhere("question_11", "like", "%".$request->simplesearch."%")
        ->orWhere("question_12", "like", "%".$request->simplesearch."%")
        ->orWhere("question_13", "like", "%".$request->simplesearch."%")
        ->orWhere("question_14", "like", "%".$request->simplesearch."%")
        ->orWhere("question_15", "like", "%".$request->simplesearch."%")
        ->orderBy("created_at", "desc")->paginate(10);
        
        
        return view('admin.soumission', compact("soumissions"));
    }
    
    public function filterparrain(Request $request)
    {   
        //dd($request);
        
        
        $allparrains = Parrain::where("nom", "like", "%".$request->simplesearch."%")
        ->orWhere("prenom", "like", "%".$request->simplesearch."%")
        ->orWhere("email", "like", "%".$request->simplesearch."%")
        ->orWhere("parnom", "like", "%".$request->simplesearch."%")
        ->orWhere("parprenom", "like", "%".$request->simplesearch."%")
        ->orWhere("paremail", "like", "%".$request->simplesearch."%")
        ->orderBy("created_at", "desc")->paginate(10);
        
        
        return view('admin.allparrain', compact("allparrains"));
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Soumission  $soumission
     * @return \Illuminate\Http\Response
     */
    public function showparrain($id)
    {
        $parrain = Parrain::find($id);
        return view("admin.showparrain", compact("parrain"));
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Soumission  $soumission
     * @return \Illuminate\Http\Response
     */
    public function show($fiche)
    {
        $soumission = Soumission::find($fiche);
        return view("admin.simple-soumission", compact("soumission"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Soumission  $soumission
     * @return \Illuminate\Http\Response
     */
    public function edit($fiche)
    {
        $soumission = Soumission::find($fiche);
        return view('admin.edit-soumission', compact('soumission'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Soumission  $soumission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $fiche)
    {
        $submit = Soumission::find($fiche)->update($request->all());
        return redirect()->to("/manage-quiz");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Soumission  $soumission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Soumission $soumission)
    {
        //
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Soumission  $soumission
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        //dd($request);
        if($request->typeproc == 0){ 
        
            foreach( explode(',',$request->listitem[0]) as $ido ){
                $forms = Soumission::find($ido)->delete();
            }
        
        }else{
            $forms = Soumission::findOrFail($request->itemid)->delete();
        }
        return redirect()->to("/manage-quiz");
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Soumission  $soumission
     * @return \Illuminate\Http\Response
     */
    public function deleteparrain(Request $request)
    {
        //dd($request);
        if($request->typeproc == 0){ 
        
            foreach( explode(',',$request->listitem[0]) as $ido ){
                $forms = Parrain::find($ido)->delete();
            }
        
        }else{
            $forms = Parrain::find($request->itemid)->delete();
        }
        return redirect()->to("/manage-parrain");
    }
}
