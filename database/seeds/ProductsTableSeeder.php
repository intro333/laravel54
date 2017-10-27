<?php

use App\Models\Products;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        DB::table('products')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        foreach ($this->getData() as $item) {
            Products::create($item);
        }
    }

    public function getData()
    {
        $data = [
            [
                'product_category_id'   => 1,
                'bar_code'      => 'MP1001',
                'name'          => 'Говядина',
                'description'   => 'Говядина.',
                'price'         => '800',
                'unit'         => 'кг.',
                'features'      => null,//json поле
                'image_path'    => 'beef.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 1,
                'bar_code'      => 'MP1002',
                'name'          => 'Свинина',
                'description'   => 'Свинина.',
                'price'         => '650',
                'unit'         => 'кг.',
                'features'      => null,//json поле
                'image_path'    => 'pork.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 1,
                'bar_code'      => 'MP1003',
                'name'          => 'Телятина',
                'description'   => 'Телятина.',
                'price'         => '545',
                'unit'         => 'кг.',
                'features'      => null,//json поле
                'image_path'    => 'veal.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 3,
                'bar_code'      => 'MP3001',
                'name'          => 'Творог 250 гр.',
                'description'   => 'Творог.',
                'price'         => '200',
                'unit'         => 'шт.',
                'features'      => null,//json поле
                'image_path'    => 'tvorog.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 3,
                'bar_code'      => 'MP3002',
                'name'          => 'Масло 200 гр.',
                'description'   => 'Масло.',
                'price'         => '250',
                'unit'         => 'шт.',
                'features'      => null,//json поле
                'image_path'    => 'maslo.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 2,
                'bar_code'      => 'MP2001',
                'name'          => 'Брокколи 900 гр.',
                'description'   => 'Брокколи.',
                'price'         => '230',
                'unit'         => 'шт.',
                'features'      => null,//json поле
                'image_path'    => 'kapusta.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 2,
                'bar_code'      => 'MP2002',
                'name'          => 'Брокколи2 750 гр.',
                'description'   => 'Брокколи2.',
                'price'         => '260',
                'unit'         => 'шт.',
                'features'      => null,//json поле
                'image_path'    => 'kapusta2.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
        ];

        return $data;
    }
}
