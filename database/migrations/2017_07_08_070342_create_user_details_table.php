<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->increments('user_detail_id');
            $table->integer('user_details_user_id')->unsigned();//Поле для foreign key должно быть integer и ->unsigned()
            $table->string('name', 40);
            $table->string('sname', 40);
            $table->string('mname', 40)->nullable();
            $table->string('phone', 20)->nullable();
            $table->tinyInteger('gender')->unsigned()->default(0);
            $table->date('birthdate')->nullable();
            $table->json('address')->nullable();
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
        Schema::dropIfExists('user_details');
    }
}
