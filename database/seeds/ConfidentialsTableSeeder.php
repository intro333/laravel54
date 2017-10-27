<?php

use Illuminate\Database\Seeder;
use App\Models\Confidential;

class ConfidentialsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('confidentials')->truncate();

        Confidential::create([
            'electronic_key' => ''
        ]);
    }
}
