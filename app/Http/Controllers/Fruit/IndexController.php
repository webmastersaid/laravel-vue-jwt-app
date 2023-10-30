<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Resources\Fruit\FruitResource;
use App\Models\Fruit;

class IndexController extends Controller
{
    public function __invoke()
    {
        $fruits = Fruit::all();
        return FruitResource::collection($fruits);
    }
}
