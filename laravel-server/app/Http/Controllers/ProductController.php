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
        $this->middleware('auth:api', ['except' => ['addProduct']]);
    }
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
        /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }
     /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }
     /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'product' => auth()->product()
        ]);
}

}