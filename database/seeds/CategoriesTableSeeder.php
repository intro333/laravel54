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
        $categories = new Categories();
        $categories->truncate();

        foreach ($this->getData() as $item) {
            Categories::create($item);
        }
    }

    public function getData()
    {
        $data = [
            [
                "name"          => "meat-or-chicken",
                "description"   => "Мясо и курица.",
                "image_path"    => '/storage/images/categories/meat-or-chicken.jpg',
                "is_active"     => "1",
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                "name"          => "fruits-and-vegetables",
                "description"   => "Фрукты и овощи.",
                "image_path"    => 'storage/images/categories/fruits-and-vegetables.jpg',
                "is_active"     => "1",
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
            [
                "name"          => "dairy",
                "description"   => "Молочные продукты.",
                "image_path"    => '/storage/images/categories/dairy.jpg',
                "is_active"     => "1",
                "deleted_at"    => null,
                "created_at"    => Carbon::now(),
                "updated_at"    => null,
            ],
        ];

        return $data;
    }
}
