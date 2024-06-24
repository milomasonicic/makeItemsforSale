<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    //

    public function store(Request $request){

        Item::create([
            "name"=> $request->name,
            "price"=> $request->price,
            "description"=> $request->description,
            "seller"=> $request->seller,
        ]);
    }
}
