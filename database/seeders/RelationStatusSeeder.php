<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RelationStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('relation_statuses')->insert(['name' => 'В отношениях']);
        DB::table('relation_statuses')->insert(['name' => 'Одинок(а)']);
        DB::table('relation_statuses')->insert(['name' => 'В активном поиске']);
        DB::table('relation_statuses')->insert(['name' => 'Женат/Замужем']);
        DB::table('relation_statuses')->insert(['name' => 'Скрыт']);
    }
}
