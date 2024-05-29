<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;

    protected $table ='sales';

    //fungsi create data
    function createData($data)
    {
        return $this->create($data);
    }

    //fungsi update data
    function updateData($id, $data)
    {
        return $this->where('id', $id)->update($data);
    }

    //fungsi delete data
    function deleteData($id)
    {
        return $this->where('id', $id)->delete();
    }

    //fungsi view data
    function viewData($id)
    {
        return $this->where('id', $id)->first();
    }

    //fungsi get all data
    function getAllData()
    {
        return $this->all();
    }
}
