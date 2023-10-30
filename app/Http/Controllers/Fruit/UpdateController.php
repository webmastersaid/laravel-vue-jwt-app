<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Fruit\UpdateRequest;
use App\Models\Fruit;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Fruit $fruit)
    {
        $data = $request->validated();
        $fruit->update($data);
        return response([]);
    }
}
