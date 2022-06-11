<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Product;
use Validator;

class ProductController extends Controller{
      /**
     * Create a new ProductController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['addProduct','getAllProducts','getProductById']]);
    }
    public function getAllProducts(){
        $products = Product::all();
        
        return response()->json([
            "status" => "Success",
            "products" => $products
        ], 200);
    }
    public function getProductById(Request $request){
            $product = Product::orderBy('created_at','desc')->get();
            $product = Product::find($request->id)->get();
            return response()->json([
                "status" => "Success",
                "product" => $product
            ], 200);

    }
    public function addProduct(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'description' => 'required|string',
            'price' => 'required',
            'quantity' =>'required|integer',
            'category_id' =>'required|integer',
            'img_link' =>'string',

        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $product = Product::create(array_merge(
                    $validator->validated()
                ));
        return response()->json([
            'message' => 'product successfully added',
            'product' => $product
        ], 201);

    }



}