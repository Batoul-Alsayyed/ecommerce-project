<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller{
    public function getAllProducts($id = null){
        if($id != null){
            $products = Product::find($id);
        }else{
            $products = Product::all();
        }
        
        return response()->json([
            "status" => "Success",
            "products" => $products
        ], 200);
    }
}
