<?php

use App\Models\OrdersQuota;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class OrderQuotaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders_quota')->truncate();

        foreach ($this->getData() as $item) {
            OrdersQuota::create($item);
        }
    }

    public function getData()
    {
        $data = [
            ['time_quota'   => '9:00-9:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '9:30-10:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '10:00-10:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '10:30-11:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '11:00-11:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '11:30-12:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '12:00-12:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '12:30-13:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '13:00-13:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '13:30-14:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '14:00-14:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '14:30-15:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '15:00-15:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '15:30-16:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '16:00-16:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '16:30-17:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '17:00-17:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '17:30-18:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '18:00-18:30', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
            ['time_quota'   => '18:30-19:00', 'counts_quota'  =>  15, 'delivery_date' => Carbon::now()],
        ];

        return $data;
    }
}
