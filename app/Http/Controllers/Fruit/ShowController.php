<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Resources\Fruit\FruitResource;
use App\Models\Fruit;

class ShowController extends Controller
{
    public function __invoke(Fruit $fruit)
    {
        return new FruitResource($fruit);
    }
}
