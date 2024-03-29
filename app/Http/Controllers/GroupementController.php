<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Groupement;

class GroupementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $groupements = Groupement::orderBy("created_at", "desc")->paginate(15);
        return view("admin.groupes", compact('groupements'));
    }
    
    public function filtergroupe(Request $request)
    {   
        // Gtroupe is filtered
        $groupements = Groupement::where("name_prename", "like", "%".$request->simplesearch."%")
        ->orWhere("groupement", "like", "%".$request->simplesearch."%")
        ->orWhere("secteur", "like", "%".$request->simplesearch."%")
        ->orWhere("pers_res", "like", "%".$request->simplesearch."%")
        ->orderBy("created_at", "desc")->paginate(10);
        
        
        return view('admin.groupes')->with("groupements",$groupements);
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
                $forms = Groupement::find($ido)->delete();
            }
        
        }else{
            $forms = Groupement::find($request->itemid)->delete();
        }
        return redirect()->to("/manage-groupe");
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
        //dd($request);
        $groupe = Groupement::create($request->all());
        return redirect()->back();
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
    public function edit($fiche)
    {
        $groupement = Groupement::find($fiche);
        return view('admin.edit-groupement', compact('groupement'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $fiche)
    {
        $groupement = Groupement::find($fiche)->update($request->all());
        return redirect()->to("/manage-groupe");
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
