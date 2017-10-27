<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserDetail;
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
//        DB::table('user_details')->truncate();
//        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
//        DB::table('users')->truncate();
//        DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        foreach ($this->getUserData() as $item) {
            User::create($item);
        }
        foreach ($this->getUserDetailsData() as $item) {
            UserDetail::create($item);
        }
    }

    public function getUserData()
    {
        $data = [
//            [
//                "id"        => 1,
//                "email"     => "qwe@mail.ru",
//                "password"  => bcrypt('123456'),
//                "role"      => 'person',
//                "is_active" => 1,
//                "remember_token"   => "",
//            ],
            [
                "id"        => 2,
                "email"     => "intro333@ya.ru",
                "password"  => bcrypt(''),
                "role"      => 'admin',
                "is_active" => 1,
                "remember_token"   => "",
            ],
        ];

        return $data;
    }

    public function getUserDetailsData()
    {
        $data = [
//            [
//                "user_details_user_id"  => 1,
//                "name"   => 'Дмитрий',
//                "sname"  => 'Держаев',
//                "mname"  => '',
//                "phone"  => '+7 (926) 851 20 86',
//                "gender"    => 1,
//            ],
            [
                "user_details_user_id"  => 2,
                "name"   => 'Сергей',
                "sname"  => 'Виноградов',
                "mname"  => '',
                "phone"  => '+7 (111) 111 11 11',
                "gender"    => 1,
            ],
        ];

        return $data;
    }
}
