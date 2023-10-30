<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Models\Fruit;

class DeleteController extends Controller
{
    public function __invoke(Fruit $fruit)
    {
        $fruit->delete();
        return response([]);
    }
}
