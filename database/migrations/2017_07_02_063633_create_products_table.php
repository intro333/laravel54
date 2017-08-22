<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('product_id');
            $table->integer('product_category_id')->unsigned();//Поле для foreign key должно быть integer и ->unsigned()
            $table->string('bar_code', 255)->unique();
            $table->string('name', 40);
            $table->string('description', 255)->nullable();
            $table->string('image_path', 500);
            $table->string('price', 20);
            $table->string('unit', 20);
            $table->json('features')->nullable();
            $table->tinyInteger('is_active')->unsigned();
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
        Schema::dropIfExists('products');
    }
}
