<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::collection('users')->truncate();

        foreach ($this->getData() as $item) {
            DB::collection('users')->insert($item);
        }
    }

    public function getData()
    {
        $data = [
            [
                "user_id" => "1",
                "name"    => "Dima",
                "email"   => "intro333@ya.ru",
                "password"         => bcrypt('12345'),
                "remember_token"   => "",
                "created_at"       => Carbon::now(),
                "updated_at"       => "",
            ]
        ];

        return $data;
    }
}
