<?php

use App\Models\Products;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Products::all();

        foreach ($products as $product) {
            $product->update(['unit' => 'kg']);
        }
    }
}
