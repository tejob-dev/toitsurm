<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Models\Soumission;
use App\Models\Parrain;
use App\Models\Contact;
use App\Models\Groupement;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PayhistoController;
use App\Http\Controllers\SoumissionController;
use App\Http\Controllers\GroupementController;
// Okay import
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FrontController::class, 'index']);
Route::redirect('/webcache', '/index.html', 302);
Route::redirect('/index', 'home', 302);
Route::redirect('/connect', 'login', 302);

Auth::routes();

Route::get('/notavailable', function(){
    return view("frontend.404");
});
Route::get('/index(.*?)', [FrontController::class, 'index']);
Route::get('/index.html', [FrontController::class, 'index']);
Route::get('/understand.html', [FrontController::class, 'understand']);
Route::get('/gallery.html', [FrontController::class, 'gallery']);
Route::get('/itemselect.html', [FrontController::class, 'itemselect']);
Route::get('/parrainage', [FrontController::class, 'parrainage']);
Route::get('/inscription', [FrontController::class, 'quiz']);
Route::get('/inscription2', [FrontController::class, 'quiz2']);
Route::get('/contact.html', [FrontController::class, 'contact']);
Route::post('/contact-save', [FrontController::class, 'savecontact']);
Route::post('/parrain-save', [FrontController::class, 'saveparrain']);
Route::post('/contact-me/feedback', [FrontController::class, 'savecontact']);

Route::get('/villas', function(){
    return view("frontend.404");
});
Route::get('/villa', function(){
    return view("frontend.villas");
});

Route::get('/villa2', function(){
    return view("frontend.villass");
});

Route::post('/simple-register', [GroupementController::class, 'store']);
    
Route::post('/wp-admin/admin-ajax.php', [FrontController::class, 'formsubmission']);
Route::post('/forms/{idform}/insights/events/v3/see', [FrontController::class, 'formsee']);

Route::group(['middleware' => 'auth'], function () {
    Route::redirect('/inbox', '/home', 302);
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/espace-client', [InboxController::class, 'index'])->name('inbox.index');
    Route::get('/espace-client/{id}', [InboxController::class, 'show'])->name('inbox.show');
    
    
    Route::get('/manage-user', [HomeController::class, 'users']);
    Route::get('/manage-quiz', [SoumissionController::class, "index"]);
    Route::get('/manage-quiz/{fiche}', [SoumissionController::class, "show"]);
    Route::get('/manage-quiz/{fiche}/edit', [SoumissionController::class, "edit"]);
    Route::post('/manage-quiz/{fiche}', [SoumissionController::class, "update"]);
    Route::post('/manage-soumiss/suppr', [SoumissionController::class, "delete"]);
    Route::post('/soumission/filter', [SoumissionController::class, "filter"]);
    Route::get('/manage-histo/{id}', [PayhistoController::class, "rendlisthisto"]);
    Route::get('/manage-histo/{id}/add', [PayhistoController::class, "createhisto"]);
    Route::post('/manage-histo/add', [PayhistoController::class, "addhisto"]);
    
    Route::get('/manage-dream', [GalleryController::class, "index"]);
    Route::get('/manage-dream/create', [GalleryController::class, "create"]);
    Route::post('/manage-dream/add', [GalleryController::class, "store"]);
    Route::get('/manage-dream/{dream}/edit', [GalleryController::class, "edit"]);
    Route::post('/manage-dream/{dream}/update', [GalleryController::class, "update"]);
    Route::post('/manage-dream/delete', [GalleryController::class, "delete"]);
    
    Route::get('/manage-contact', [ContactController::class, "index"]);
    Route::get('/manage-contact/{fiche}/edit', [ContactController::class, "edit"]);
    Route::post('/manage-contact/{fiche}', [ContactController::class, "update"]);
    Route::post('/manage-contact/delete', [ContactController::class, "delete"]);
    Route::post('/contacts/filter', [ContactController::class, "filtercontact"]);
    
    Route::get('/manage-parrain', [SoumissionController::class, "allparrain"]);
    Route::get('/manage-parrain/{id}', [SoumissionController::class, "showparrain"]);
    Route::get('/manage-parrain/{fiche}/edit', [SoumissionController::class, "editparrain"]);
    Route::post('/manage-parrain/{fiche}', [SoumissionController::class, "updateparrain"]);
    Route::post('/manage-parrain/delete', [SoumissionController::class, "deleteparrain"]);
    Route::post('/parrains/filter', [SoumissionController::class, "filterparrain"]);
    
    Route::get('/manage-groupe', [GroupementController::class, "index"]);
    Route::get('/manage-groupe/{fiche}/edit', [GroupementController::class, "edit"]);
    Route::post('/manage-groupe/{fiche}', [GroupementController::class, "update"]);
    Route::post('/manage-groupe/delete', [GroupementController::class, "delete"]);
    Route::post('/groupes/filter', [GroupementController::class, "filtergroupe"]);
    
    Route::get("/manage-quiz/export/all", function(){
       
        $soumissions = Soumission::all();
    
        if(empty($soumissions) == true) return redirect()->back();
        // these are the headers for the csv file. Not required but good to have one incase of system didn't recongize it properly
        $headers = array(
          'Content-Type' => 'text/csv'
        );
    
        //I am storing the csv file in public >> files folder. So that why I am creating files folder
        if (!File::exists(public_path()."/files")) {
            File::makeDirectory(public_path() . "/files", 0755, true, true);
        }
        
        $allsubm = [];
        foreach ($soumissions as $key => $data){
            $subm = [];
            for($i = 1; $i <= 18; $i++){
                $quest = "question_".$i;
                if($data->$quest != null  || ($data->$quest == null && $i <= 15)){
                    $subm[] = $data->$quest;
                }
            }
            $allsubm[$data->id] = $subm;
        }
        
        $list_quest = [
            "Quel type d'habitation souhaiteriez-vous ?",
            "Dans quelle commune voudriez-vous résider ?",
            "Combien de pièces devrait-elle comporter ? ",
            "Combien de chambres ?",
            "Sur quelle surface devrait-elle être construite ?",
            "Cochez les options supplémentaires que vous souhaiteriez ?",
            "Quel est votre budget ?",
            "Souhaiteriez-vous que ce soit :",
            "Souhaiteriez-vous qu’elle soit déjà équipée ?",
            "Pour quelle offre d'achat opteriez-vous ?",
            "Quel est votre email ?",
            "Quel est votre nom ?",
            "Quel est votre prénom ?",
            "Quelle est votre profession ?",
            "Où résidez-vous ?",
            "Votre numéro de téléphone ?"
            ];
        
        $filename =  public_path("files/tous_exportes_".time().".csv");
        $handle = fopen($filename, 'w');
        fprintf($handle, chr(0xEF).chr(0xBB).chr(0xBF));
        //adding the first row
        fputcsv($handle, $list_quest, ";");
        
        foreach($allsubm as $data){
        
            if(sizeof($data) >= 15){
                
                fputcsv($handle, $data, ";");
                
            }
            
        
        }
    
        fclose($handle);
        //download command
        return Response::download($filename, "tous_les_fiches_de_soumissions.csv", $headers);
    });
    
    Route::get("/manage-parrain/export/all", function(){
       
        $parrains = Parrain::all();
    
        if(empty($parrains) == true) return redirect()->back();
        // these are the headers for the csv file. Not required but good to have one incase of system didn't recongize it properly
        $headers = array(
          'Content-Type' => 'text/csv'
        );
    
        //I am storing the csv file in public >> files folder. So that why I am creating files folder
        if (!File::exists(public_path()."/files")) {
            File::makeDirectory(public_path() . "/files", 0755, true, true);
        }
        
        $titles = [
            "Nom/Prénom du parrain",
            "Son email",
            "Nom/Prénom du parrainé",
            "Email du parrainé",
            "Telephone du parrainé",
            ];
        
        $filename =  public_path("files/tous_exportes_".time().".csv");
        $handle = fopen($filename, 'w');
        fprintf($handle, chr(0xEF).chr(0xBB).chr(0xBF));
        //adding the first row
        fputcsv($handle, $titles, ";");
        
        foreach($parrains as $data){
            
            $data = [
                $data->nom." ".$data->prenom,
                $data->email,
                $data->parnom." ".$data->parprenom,
                $data->paremail,
                $data->partelephone
                ];
            
            fputcsv($handle, $data, ";");    
        }
    
        fclose($handle);
        //download command
        return Response::download($filename, "fiches_des_parrains.csv", $headers);
    });
    
    Route::get("/manage-contact/export/all", function(){
       
        $contacts = Contact::all();
    
        if(empty($contacts) == true) return redirect()->back();
        // these are the headers for the csv file. Not required but good to have one incase of system didn't recongize it properly
        $headers = array(
          'Content-Type' => 'text/csv'
        );
    
        //I am storing the csv file in public >> files folder. So that why I am creating files folder
        if (!File::exists(public_path()."/files")) {
            File::makeDirectory(public_path() . "/files", 0755, true, true);
        }
        
        $titles = [
            "Nom/Prénom",
            "Email",
            "Telephone",
            "Message",
            ];
        
        $filename =  public_path("files/tous_exportes_".time().".csv");
        $handle = fopen($filename, 'w');
        fprintf($handle, chr(0xEF).chr(0xBB).chr(0xBF));
        //adding the first row
        fputcsv($handle, $titles, ";");
        
        foreach($contacts as $data){
            
            $data = [
                $data->nom." ".$data->prenom,
                $data->email,
                $data->telephone,
                $data->message,
                ];
            
            fputcsv($handle, $data, ";");    
        }
    
        fclose($handle);
        //download command
        return Response::download($filename, "fiches_des_contacts.csv", $headers);
    });
    
    Route::get("/manage-groupe/export/all", function(){
       
        $groupements = Groupement::all();
    
        if(empty($groupements) == true) return redirect()->back();
        // these are the headers for the csv file. Not required but good to have one incase of system didn't recongize it properly
        $headers = array(
          'Content-Type' => 'text/csv'
        );
    
        //I am storing the csv file in public >> files folder. So that why I am creating files folder
        if (!File::exists(public_path()."/files")) {
            File::makeDirectory(public_path() . "/files", 0755, true, true);
        }
        
        $titles = [
            "Nom du groupement",
            "Type du groupement",
            "Secteur d'activité",
            "Personne ressource",
            "Téléphone",
            ];
        
        $filename =  public_path("files/tous_exportes_".time().".csv");
        $handle = fopen($filename, 'w');
        fprintf($handle, chr(0xEF).chr(0xBB).chr(0xBF));
        //adding the first row
        fputcsv($handle, $titles, ";");
        
        foreach($groupements as $data){
            
            $data = [
                $data->name_prename,
                $data->groupement,
                $data->secteur,
                $data->pers_res,
                $data->contact,
                ];
            
            fputcsv($handle, $data, ";");    
        }
    
        fclose($handle);
        //download command
        return Response::download($filename, "fiches_des_groupements.csv", $headers);
    });
    
    Route::get('/manage-quiz/export/{id}', function($id){
        
        $soumission = Soumission::find($id);
        
        if(empty($soumission) == true) return redirect()->back();
        // these are the headers for the csv file. Not required but good to have one incase of system didn't recongize it properly
        $headers = array(
          'Content-Type' => 'text/csv'
        );
    
        //I am storing the csv file in public >> files folder. So that why I am creating files folder
        if (!File::exists(public_path()."/files")) {
            File::makeDirectory(public_path() . "/files", 0755, true, true);
        }
    
        
        $subm = [];
        for($i = 1; $i <= 18; $i++){
            $quest = "question_".$i;
            if($soumission->$quest != null || ($soumission->$quest == null && $i <= 16)){
                $subm[] = $soumission->$quest;
            }
        }
    
        //creating the download file
        $filename =  public_path("files/download_".time().".csv");
        $handle = fopen($filename, 'w');
        fprintf($handle, chr(0xEF).chr(0xBB).chr(0xBF));
        //adding the first row
        $list_quest = [
            "Quel type d'habitation souhaiteriez-vous ?",
            "Dans quelle commune voudriez-vous résider ?",
            "Combien de pièces devrait-elle comporter ? ",
            "Combien de chambres ?",
            "Sur quelle surface devrait-elle être construite ?",
            "Cochez les options supplémentaires que vous souhaiteriez ?",
            "Quel est votre budget ?",
            "Souhaiteriez-vous que ce soit :",
            "Souhaiteriez-vous qu’elle soit déjà équipée ?",
            "Pour quelle offre d'achat opteriez-vous ?",
            "Quel est votre email ?",
            "Quel est votre nom ?",
            "Quel est votre prénom ?",
            "Quelle est votre profession ?",
            "Où résidez-vous ?",
            "Votre numéro de téléphone ?"
            ];
            
        fputcsv($handle, $list_quest, ";");
        
        if(sizeof($subm) >= 15) fputcsv($handle, $subm, ";");
        
        fclose($handle);
        //download command
        return Response::download($filename, "download_".time().".csv", $headers);
        
    });
    
});


Route::get('/storage/{dir}/{file}', function ($name, $file) {
    
    return Storage::disk('public')->download($name."/".$file);
});