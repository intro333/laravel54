<?php

namespace App\Jobs;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UpdateOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $order;
    protected $params;

    /**
     * Create a new job instance.
     *
     * @param Order $order
     * @param $params
     */
    public function __construct(Order $order, $params)
    {
        $this->order = $order;
        $this->params = $params;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->order->update([
            'comment'       => $this->params['comment'] ? $this->params['comment'] : '',
            'status'        => 1, //Обрабатывается
            'time_quota_id' => $this->params['timeQuotaId'] && $this->params['updateResult'] !== 2 ? $this->params['timeQuotaId'] : 1,
            'features'      => $this->params['products'],
        ]);
    }
}
