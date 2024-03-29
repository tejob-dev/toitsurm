<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dreams = Gallery::paginate(15);
        return view("admin.dreamcity", compact('dreams'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("admin.makedream");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
        //dd($request->file("images"));
        
        $lastgallery = Gallery::orderBy('created_at', 'DESC')->first();
    
        $gallery = Gallery::create($request->except("list_simage"));
        
        if ($request->has("images")) {
            $images = $this->uploadFile($request);
        }
        
        $gallery->update([
            "lien_suivant"=>$lastgallery!=null?$lastgallery->id:"-1",
            "list_simage"=>$images,
        ]);
        
        return redirect()->to("/manage-dream");
    }
    
    public function uploadFile($request) {
        $listimg = "";
        foreach($request->file("images") as $image){
            $file = $image->store('public/gallery');
            $path = url(Storage::url($file));
            //$file_name = $image->getClientOriginalName();
            $listimg .= $path.",";
        }
        return $listimg;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function edit($dream)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $dream)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}
