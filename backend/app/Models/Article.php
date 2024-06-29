<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = 'articles';

    // guarded
    protected $guarded = [];

       // function create data
    function createData($data)
    {
        return $this->create($data);
    }

    // function update data
    function updateData($id, $data)
    {
        return $this->where('id', $id)->update($data);
    }

    // function delete data
    function deleteData($id)
    {
        return $this->where('id', $id)->delete();
    }
    function searchData($keyword)
    {
        return $this->where('title', 'like', '%'. $keyword. '%')
            ->orWhere('content', 'like', '%'. $keyword. '%')
            ->orWhere('creator', 'like', '%'. $keyword. '%')
            ->get();
    }

    // function view data
    function viewData($id)
    {
        return $this->where('id', $id)->first();
        
    }
}
