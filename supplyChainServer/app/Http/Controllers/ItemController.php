<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ItemController extends Controller
{
    //

    public function store(Request $request){

        $imagePath = 'no Image'; // Inicijalizirajte varijablu izvan if bloka

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public'); // Sačuvaj sliku u 'public/images' direktorijumu
        }
    
        // Provjerite da li je $imagePath prazan string ako nije postavljena slika
        Item::create([
            "name" => $request->name,
            "price" => $request->price,
            "description" => $request->description,
            "seller" => $request->seller,
            "imagepath" => $imagePath ? asset("storage/{$imagePath}") : null // Generišite putanju do slike za čuvanje u bazi
        ]);
    
        
    }
}
