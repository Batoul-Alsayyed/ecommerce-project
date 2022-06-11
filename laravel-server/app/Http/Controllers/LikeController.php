<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;

class LikeController extends Controller{
    public function addLike(Request $request){
        $like = new Like;
        $like->user_id = $request->user_id;
        $like->product_id = $request->product_id;
        $like->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
    public function getAllLikes($id = null){
        if($id != null){
            $likes = Like::find($id);
        }else{
            $likes = Like::all();
        }
        
        return response()->json([
            "status" => "Success",
            "likes" => $likes
        ], 200);
    }
}
