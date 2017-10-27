<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('order_id');
            $table->integer('user_order_id')->unsigned();//Поле для foreign key должно быть integer и ->unsigned()
//            $table->string('order_num', 255)->unique();//Уникальный номер заказа
            $table->string('comment', 3000);
            $table->integer('time_quota_id')->unsigned();//Поле для foreign key к таблице квот
            $table->tinyInteger('status')->unsigned();
            $table->json('features')->nullable();
            $table->dateTime('delivery_date')->nullable();
            $table->softDeletes(); //Для мягкого удаления.Создаёт колонку deleted_at.
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
        Schema::dropIfExists('orders');
    }
}
