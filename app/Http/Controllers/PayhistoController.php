<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Payhisto;
use Illuminate\Http\Request;

class PayhistoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addhisto(Request $request)
    {
        Payhisto::create($request->all());
        return redirect()->to('/manage-user');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payhisto  $payhisto
     * @return \Illuminate\Http\Response
     */
    public function rendlisthisto($id)
    {
    
        $userid = $id;
        $allpay = Payhisto::where("user_id", $userid)->get();
        $user = User::find($userid);
        return view('admin.allhisto', compact('allpay', 'user'));
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payhisto  $payhisto
     * @return \Illuminate\Http\Response
     */
    public function createhisto($id)
    {
        $userid = $id;
        $user = User::find($userid);
        return view('admin.createhisto', compact('user'));
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payhisto  $payhisto
     * @return \Illuminate\Http\Response
     */
    public function show(Payhisto $payhisto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payhisto  $payhisto
     * @return \Illuminate\Http\Response
     */
    public function edit(Payhisto $payhisto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payhisto  $payhisto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payhisto $payhisto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payhisto  $payhisto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payhisto $payhisto)
    {
        //
    }
}
