<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayhistosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payhistos', function (Blueprint $table) {
            $table->id();
            $table->dateTime("date_paye")->now();
            $table->integer("montant_paye");
            $table->integer("reste_paye");
            $table->string("moyen_pay")->nullable();
            $table->string("num_recu_pay")->nullable();
            $table->longText("observation")->nullable();
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payhistos');
    }
}
