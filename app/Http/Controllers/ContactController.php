<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dreampart()
    {
        //
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::orderBy("created_at", "desc")->paginate(15);
        return view("admin.messages", compact('contacts'));
    }
    
    public function filtercontact(Request $request)
    {   
        //dd($request);
        
        
        $contacts = Contact::where("nom", "like", "%".$request->simplesearch."%")
        ->orWhere("prenom", "like", "%".$request->simplesearch."%")
        ->orWhere("email", "like", "%".$request->simplesearch."%")
        ->orWhere("message", "like", "%".$request->simplesearch."%")
        ->orderBy("created_at", "desc")->paginate(10);
        
        
        return view('admin.messages')->with("contacts",$contacts);
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
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show($message)
    {
        //
        $message = Contact::find($message);
        return view("admin.message", compact('message'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit($fiche)
    {
        $contact = Contact::find($fiche);
        return view('admin.edit-message', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $fiche)
    {
        $contact = Contact::find($fiche)->update($request->all());
        return redirect()->to("/manage-contact");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
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
                $forms = Contact::find($ido)->delete();
            }
        
        }else{
            $forms = Contact::find($request->itemid)->delete();
        }
        return redirect()->to("/manage-contact");
    }
}
