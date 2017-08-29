<?php

use Illuminate\Database\Seeder;
use \App\Models\Admin;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('auth_admins')->truncate();

        foreach ($this->getUserData() as $item) {
            Admin::create($item);
        }
    }

    public function getUserData()
    {
        $data = [
            [
                "id"        => 1,
                "name"     => "Сергей",
                "email"     => "admin@mail.ru",
                "password"  => bcrypt('123456'),
                "remember_token"   => "",
            ]
        ];

        return $data;
    }
}
