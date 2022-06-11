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
    public function addProduct(Request $request){
        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->category_id = $request->category_id;
        $product->img_link = $request->img_link;
        $product->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
