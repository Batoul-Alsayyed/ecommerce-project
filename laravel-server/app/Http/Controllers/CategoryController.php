<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller{
    public function getAllCategories($id = null){
        if($id != null){
            $categories = Category::find($id);
        }else{
            $categories = Category::all();
        }
        
        return response()->json([
            "status" => "Success",
            "categories" => $categories
        ], 200);
    }
    public function getCategoryById(Request $request){
        $category = Category::orderBy('created_at','desc')->get();
        $category = Category::find($request->id)->get();
        return response()->json([
            "status" => "Success",
            "category" => $category
        ], 200);

}
    public function addCategory(Request $request){
        $category = new Category;
        $category->category_name = $request->category_name;

        $category->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
