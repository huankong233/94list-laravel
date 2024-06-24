<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileList extends Model
{
    use HasFactory;

    protected $fillable = [
        "fs_id",
        "size",
        "md5"
    ];

    public $timestamps = false;
}
