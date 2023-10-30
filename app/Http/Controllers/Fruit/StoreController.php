<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Fruit\StoreRequest;
use App\Models\Fruit;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        Fruit::create($data);
        return response([]);
    }
}
