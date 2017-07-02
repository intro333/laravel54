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
                'features'      => null,//json поле
                'image_path'    => '/storage/images/products/beef.jpg',
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
                'features'      => null,//json поле
                'image_path'    => '/storage/images/products/pork.jpg',
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
                'features'      => null,//json поле
                'image_path'    => '/storage/images/products/veal.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 3,
                'bar_code'      => 'MP3001',
                'name'          => 'Творог',
                'description'   => 'Творог.',
                'price'         => '200',
                'features'      => null,//json поле
                'image_path'    => '/storage/images/products/tvorog.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 3,
                'bar_code'      => 'MP3002',
                'name'          => 'Масло',
                'description'   => 'Масло.',
                'price'         => '250',
                'features'      => null,//json поле
                'image_path'    => '/storage/images/products/maslo.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 2,
                'bar_code'      => 'MP2001',
                'name'          => 'Брокколи',
                'description'   => 'Брокколи.',
                'price'         => '230',
                'features'      => null,//json поле
                'image_path'    => '/storage/images/products/kapusta.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                'product_category_id'   => 2,
                'bar_code'      => 'MP2002',
                'name'          => 'Брокколи2',
                'description'   => 'Брокколи2.',
                'price'         => '260',
                'features'      => null,//json поле
                'image_path'    => '/storage/images/products/kapusta2.jpg',
                'is_active'     => 1,
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
        ];

        return $data;
    }
}
