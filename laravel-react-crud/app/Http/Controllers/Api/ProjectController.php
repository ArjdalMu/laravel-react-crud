<?php

namespace App\Http\Controllers\Api;

use App\Models\Project;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::latest()->get();
        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'image' => 'required|image|mimes:jpg,png,jpeg',
            'description' => 'required',
            'category_id' => 'required'
        ]);
    
        $slug = Str::slug($validatedData['title'], '-');
        $newImageName = uniqid() . '-' . $slug . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $newImageName);
    
        $project = Project::create([
            'title' => $validatedData['title'],
            'image' => $newImageName,
            'description' => $validatedData['description'],
            'category_id' => $validatedData['category_id'],
        ]);
    
        return response()->json(['message' => 'Post added successfully'], 201);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::with('category')->where('id',$id)->latest()->first();
        return response()->json($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $project = Project::find($request->id);
        
        if (!$project) {
            return response()->json('Project not found', 404);
        }
        
        $project->title = $request->title;
        $project->category_id = $request->category_id;
        $project->description = $request->description;
        $project->save();
        
        return response()->json('Project Updated Successfully', 200);
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
{
    $project = Project::find($id);

    if (!$project) {
        return response()->json('Project not found', 404);
    }

    $project->delete();

    return response()->json('Project deleted successfully', 200);
}

}
