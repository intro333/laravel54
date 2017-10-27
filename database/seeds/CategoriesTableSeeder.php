<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use App\Models\Categories;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        DB::table('categories')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        foreach ($this->getData() as $item) {
            Categories::create($item);
        }
    }

    public function getData()
    {
        $data = [
            [
                "name"          => "Мясо и курица",
                "route"          => "meat-or-chicken",
                "description"   => "Мясо и курица.",
                "image_path"    => 'meat-or-chicken.jpg',
                "is_active"     => "1",
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                "name"          => "Фрукты и овощи",
                "route"          => "meat-or-chicken",
                "description"   => "Фрукты и овощи.",
                "image_path"    => 'fruits-and-vegetables.jpg',
                "is_active"     => "1",
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                "name"          => "Молочные продукты",
                "route"          => "meat-or-chicken",
                "description"   => "Молочные продукты.",
                "image_path"    => 'dairy.jpg',
                "is_active"     => "1",
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
        ];

        return $data;
    }
}
